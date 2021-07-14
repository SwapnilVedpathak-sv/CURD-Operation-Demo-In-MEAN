import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RootService } from './../../root.service';
import Swal from 'sweetalert2';

export interface Product {
  name: string;
  sku: string;
  description: string;
  price: number;
  stock_level: string,
}

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})

export class UpdateProductComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UpdateProductComponent>, @Inject(MAT_DIALOG_DATA) public data: Product, private root: RootService) { }
  updatedProduct: any
  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateProduct() {
    console.log("this.data", this.data)
    this.updatedProduct = this.data
    this.root.updateProduct(this.updatedProduct._id, this.updatedProduct).subscribe(result => {
      console.log(result)
      this.dialogRef.close();
      Swal.fire({
        title: "Success",
        text: "Your Product has been updated successfully !!",
        icon: "success"
      })
    },
      error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops!! Someting went wrong...',
          text: `Please try again later !!`
        })
      });
  }
}