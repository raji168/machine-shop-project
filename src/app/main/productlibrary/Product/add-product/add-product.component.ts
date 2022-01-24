import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup } from '@angular/forms';
import { Customer } from 'src/app/models/customer.model';
import { CustomerApiService } from 'src/app/services/customer-api.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MachineApiService } from 'src/app/services/machine-api.service';
import { ProductApiService } from 'src/app/services/product-api.service';
import { Product } from 'src/app/models/product.model';
import { Machine } from 'src/app/models/machine.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
 
  customerData : Customer[] = [] ;
  productData : Product[] = [];
  machineData: Machine[] = [];
  addForm : FormGroup;
  processForm: FormGroup;
  detailForm:FormGroup;
  machineForm:FormGroup;

  constructor(
    private customerApi : CustomerApiService,
    private machineApi : MachineApiService,
    private productApi : ProductApiService,
    private fb:FormBuilder
  ) { 
    
    this.addForm = this.fb.group({
       customerName : '',
       productName:'',
       drawingNo:'',
       revisionNo:''
    })

    this.processForm = this.fb.group({
       processName : '',
       processDrawing: ''
    })
  
    this.detailForm = this.fb.group({
      productName :'',
      productDrawing:'',
      processName:'',
      numberOfProcess:'',
      processDrawing:''
    })

    this.machineForm = this.fb.group({
      processName:'',
      machineName:''

    })


  }

  ngOnInit(): void {
        
        this.customerApi.getCustomerAll().subscribe(result =>{
          this.customerData = result ;
        })

        this.productApi.get().subscribe(result =>{
          this.productData = result ;
        })

        this.machineApi.getMachineAll().subscribe(result =>{
          this.machineData = result ; 
        })
  }

  onProductSave(){
    console.log(this.addForm.value);
  }

  onProcessSave(){
    console.log(this.addForm.value);
  }

  onProductDetail(){
    console.log(this.addForm.value);
  }

  onMachineMapping(){
    console.log(this.addForm.value);
  }
}
