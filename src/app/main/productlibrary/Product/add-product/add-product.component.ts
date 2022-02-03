import { Component,OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Customer } from "src/app/models/customer.model";
import { CustomerApiService } from "src/app/services/customer-api.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  customerForm:FormGroup;
  processForm:FormGroup;
  customerData: Customer[] = [];
  constructor(
    public customerService: CustomerApiService,
    private formBulider: FormBuilder
  ){
    this.customerForm= this.formBulider.group({
      customerName:"",
      customerDrawingNo:"",
      revisionNo:"",
      productName:"",
      partNo:"",
      customerDrawing:""
    }),
    this.processForm= this.formBulider.group({
      processCount:"",
      processName:"",
      processDrawingNo:"",
      processDrawing:"",
      jsirDoc:"",
      pmsDoc:"",
      pirDoc:"",
      pdirDoc:"",
      isirDoc:""
    })
  }
  ngOnInit(): void {
    this.customerService.getCustomerAll().subscribe(data => {
      this.customerData = data;
    })
  }
  onPreview(){
    console.log(this.processForm.value);
    console.log(this.customerForm.value);
  }
}