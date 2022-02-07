import { Component,OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { Customer } from "src/app/models/customer.model";
import { Product } from "src/app/models/product.model";
import { CustomerApiService } from "src/app/services/customer-api.service";
import { NotificationService } from "src/app/services/notification.service";
import { ProductApiService } from "src/app/services/product-api.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  product : Product;
  value = ' ';
  form:FormGroup;
  customerData: Customer[] = [];
  constructor(
    public customerService: CustomerApiService,
    public productService : ProductApiService,
    public dialogRef: MatDialogRef<AddProductComponent>,
    public notification: NotificationService,
    private formBulider: FormBuilder
  ){
    this.form=this.formBulider.group({
      customerName:"",
      customerDrawingNo:"",
      revisionNo:"",
      productName:"",
      partNo:"",
      customerDrawing:"",
      process:formBulider.array([])
    })
  }
  ngOnInit(): void {
    this.customerService.getCustomerAll().subscribe(data => {
      this.customerData = data;
    })
  }
  addNewProcessGroup() {
    const add = this.form.get('process') as FormArray;
    add.push(this.formBulider.group({
      processName:"",
      processDrawingNo:"",
      processDrawing:"",
      jsirDoc:"",
      pmsDoc:"",
      pirDoc:"",
      pdirDoc:"",
      isirDoc:""
    }))
  }
  removeGroup(index) {
    const form = this.form.get('process') as FormArray
    form.removeAt(index);
  }

  onSubmit() {

    if (this.product) {
      this.productService.updateProduct(this.form.value, this.product._id).subscribe(data => {
        this.dialogRef.close(data);
        this.notification.success("Edited successfully!!");
      });
    } else {
      this.productService.addProduct(this.form.value).subscribe(data => {
        this.dialogRef.close(data);
        this.notification.success("Added successfully!!");
      });
    }
}
}