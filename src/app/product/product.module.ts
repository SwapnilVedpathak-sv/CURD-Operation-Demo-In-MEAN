import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ListOfProductsComponent } from './list-of-products/list-of-products.component';
import { AddInventoryProductComponent } from './add-inventory-product/add-inventory-product.component';
import { MaterialModule } from './../material/material.module';
import { UpdateProductComponent } from './update-product/update-product.component';


@NgModule({
  declarations: [
    ProductComponent,
    ListOfProductsComponent,
    AddInventoryProductComponent,
    UpdateProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MaterialModule
  ]
})
export class ProductModule { }
