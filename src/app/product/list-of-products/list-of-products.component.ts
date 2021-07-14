import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UpdateProductComponent } from '../update-product/update-product.component';
import { RootService } from './../../root.service';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.scss']
})
export class ListOfProductsComponent implements OnInit {

  displayedColumns = ['id', 'name', 'sku', 'description', 'price', 'stock_level', 'actions'];
  collection: any = [];
  singleProductData: any = [];
  dataSource = new MatTableDataSource(this.collection);
  displaySpinner = false;
  Product: any

  constructor(private root: RootService, public dialog: MatDialog) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.getData();
  }

  editProduct(product: any) {
    const dialogRef = this.dialog.open(UpdateProductComponent, {
      width: '350px',
      data: product
    });

    dialogRef.afterClosed().subscribe(result => {
      this.Product = product;
    });
  }

  getData() {
    setTimeout(() => {
      this.displaySpinner = true;
      this.root.getProductList().subscribe((result) => {
        this.displaySpinner = false;
        this.collection = result;
        this.dataSource = new MatTableDataSource(this.collection);
        this.dataSource.paginator = this.paginator;
      });
    }, 100)
  }

  deleteProduct(item: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to delete from application !!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Delete!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.root.deleteProduct(item).subscribe((result) => {
          console.warn("result", result)
        })
        this.getData();
      }
    })
  }
}
