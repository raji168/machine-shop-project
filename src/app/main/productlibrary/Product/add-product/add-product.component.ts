import { Component,Inject,OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
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
    @Inject(MAT_DIALOG_DATA) public data : {product: Product},
    public customerService: CustomerApiService,
    public productService : ProductApiService,
    public dialogRef: MatDialogRef<AddProductComponent>,
    public notification: NotificationService,
    private formBulider: FormBuilder
  ){
    this.form=this.formBulider.group({
      customerName:['', Validators.required],
      customerDrawingNo:['', Validators.required],
      // revisionNo:['', Validators.required],
      productName:['', Validators.required],
      // partNo:['', Validators.required],
      customerDrawing:['', Validators.required],
      process:formBulider.array([])
    })
  }
  ngOnInit(): void {
    this.customerService.getCustomerAll().subscribe(data => {
      this.customerData = data;
    })
  
    this.product = this.data?.product;
    if(this.product) {
      this.form.patchValue(this.product);
      this.form.patchValue(this.product.process);
      this.form.get('customer')?.setValue(this.data.product.customerName);
    }

    // this.form.valueChanges.subscribe((v) => {
    //       this.isDisable = !this.form.valid;
    // });
  }
  
  addNewProcessGroup() {
    const add = this.form.get('process') as FormArray;
    add.push(this.formBulider.group({
      operationName: ['',Validators.required],
      processDrawingNo: ['',Validators.required],
      processDrawing: ['',Validators.required],
      jsirDoc: ['',Validators.required],
      pmsDoc: ['',Validators.required],
      pirDoc: ['',Validators.required],
      pdirDoc: ['',Validators.required],
      isirDoc: ['',Validators.required]
    }))
  }
  removeGroup(_id) {
    const form = this.form.get('process') as FormArray
    form.removeAt(_id);
  }

  onSubmit() {

    if (this.product) {
      // this.form.disable();
      this.dialogRef.close();
      this.productService.updateProduct(this.form.value, this.product._id).subscribe(data => {
        console.log(data)
        this.notification.success("Edited successfully!!");
      });
    } else {
      this.form.disable();
      this.dialogRef.close();
      this.productService.addProduct(this.form.value).subscribe(data => {
        this.notification.success("Product Added successfully!!");
      });
    console.log('saved');
    console.log(this.form.value);
    }
  }
}
