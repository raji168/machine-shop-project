import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Customer } from 'src/app/models/customer.model';
import { CustomerApiService } from 'src/app/services/customer-api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
 
  customerData : Customer[] = [] ;
  mapForm1 : FormGroup;

  constructor(
    private customerApi : CustomerApiService,
    private fb:FormBuilder
  ) { 
    
    this.mapForm1 = this.fb.group({
       customerName : '',
       productName:'',
       drawingNo:'',
       revisionNo:''
    })

  }

  ngOnInit(): void {
        
        this.customerApi.getCustomerAll().subscribe(result =>{
          this.customerData = result ;
        })
  }

  onSave(){
    console.log(this.mapForm1.value);
  }
}
