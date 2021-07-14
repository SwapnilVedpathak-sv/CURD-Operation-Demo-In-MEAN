import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { RootService } from 'src/app/root.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-inventory-product',
  templateUrl: './add-inventory-product.component.html',
  styleUrls: ['./add-inventory-product.component.scss']
})
export class AddInventoryProductComponent implements OnInit {
  productsFrom: FormGroup;

  constructor(public fb: FormBuilder, private root: RootService, private router: Router) {
    this.productsFrom = this.fb.group({
      name: [],
      sku: [],
      description: [],
      price: [],
      stock_level: []
    });
  }

  ngOnInit(): void {
  }

  reset() {
    this.productsFrom.reset(this.productsFrom.value);
  }

  save() {
    this.root.saveProduct(this.productsFrom.value)
      .pipe(first())
      .subscribe((res) => {
        console.log('Response', res);
        Swal.fire({
          title: "Success",
          text: "Your product has been generated successfully !!",
          icon: "success"
        })
        this.productsFrom.reset();
        setTimeout(() => {
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['product']);
          })
        }, 1000);
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
