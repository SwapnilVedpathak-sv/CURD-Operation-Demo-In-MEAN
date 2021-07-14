import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInventoryProductComponent } from './add-inventory-product.component';

describe('AddInventoryProductComponent', () => {
  let component: AddInventoryProductComponent;
  let fixture: ComponentFixture<AddInventoryProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInventoryProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInventoryProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
