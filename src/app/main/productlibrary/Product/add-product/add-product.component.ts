import { Component,OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";
import { Customer } from "src/app/models/customer.model";
import { CustomerApiService } from "src/app/services/customer-api.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  value = ' ';
  form:FormGroup;
  customerData: Customer[] = [];
  constructor(
    public customerService: CustomerApiService,
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
 
}