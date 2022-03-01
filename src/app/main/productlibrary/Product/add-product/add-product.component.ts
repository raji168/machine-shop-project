import { HttpClient, HttpEventType, HttpResponse } from "@angular/common/http";
import { Component, Inject, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Customer } from "src/app/models/customer.model";
import { Drawing } from "src/app/models/drawing.model";
import { Product } from "src/app/models/product.model";
import { CustomerApiService } from "src/app/services/customer-api.service";
import { NotificationService } from "src/app/services/notification.service";
import { ProductApiService } from "src/app/services/product-api.service";
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  selectedFile;
  product: Product;
  form: FormGroup;
  customerData: Customer[] = [];
  drawingData: Drawing[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { product: Product },
    public customerService: CustomerApiService,
    public productService: ProductApiService,
    public dialogRef: MatDialogRef<AddProductComponent>,
    public notification: NotificationService,
    private http: HttpClient,
    private formBulider: FormBuilder
  ) {
    this.form = this.formBulider.group({
      customer: ['', Validators.required],
      DrawingNo: ['', Validators.required],
      productName: ['', Validators.required],
      drawing: ['', Validators.required],
      process: formBulider.array([])
    })
  }
  ngOnInit(): void {
    this.customerService.getCustomerAll().subscribe(data => {
      this.customerData = data;
    })
    this.product = this.data?.product;
    if (this.product) {
      this.form.patchValue(this.product);
      this.form.patchValue(this.customerData);
    }
  }
  patchProcessGroup(){

  }
  addNewProcessGroup() {
    const add = this.form.get('process') as FormArray;
    add.push(this.formBulider.group({
      operationName: ['', Validators.required],
      processDrawingNo: ['', Validators.required],
      processDrawing: ['', Validators.required],
      jsirDoc: ['', Validators.required],
      pmsDoc: ['', Validators.required],
      pirDoc: ['', Validators.required],
      pdirDoc: ['', Validators.required],
      isirDoc: ['', Validators.required]
    }))
  }
  removeGroup(_id) {
    const form = this.form.get('process') as FormArray
    form.removeAt(_id);
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile.name)
  }

  onUpload() {
    if (this.selectedFile) {
      this.productService.updateFiles(this.selectedFile).subscribe(
        (event) => {
          if (event.type === HttpEventType.Response) {
            this.notification.success('Document Uploaded successdully');
            console.log(event);
            const elemId = event.body.id;
            console.log(elemId)
            this.form.get('drawing').setValue(event.body.id)
          }
        })
      }
  }
 ondrawingUpload(indexvalue){
   if(this.selectedFile){
    this.productService.updateFiles(this.selectedFile).subscribe(
      (event)=>{
        if (event.type === HttpEventType.Response) {
        this.notification.success('Document uploaded successFully')
        const ProcessForm =this.form.get('process') as FormArray;
        ProcessForm.at(indexvalue).get('processDrawing').setValue(event.body.id)
        }
      });
   }
 }
 onJsirSelect(event,indexvalue){
  this.selectedFile = <File>event.target.files[0];
  console.log(this.selectedFile.name)
  if(this.selectedFile){
    this.productService.updateFiles(this.selectedFile).subscribe(
      (event)=>{
        if (event.type === HttpEventType.Response) {
        this.notification.success('Document uploaded successFully')
        const ProcessForm =this.form.get('process') as FormArray;
        ProcessForm.at(indexvalue).get('jsirDoc').setValue(event.body.id);
      }
      });
   }
 }
 onPmsSelect(event,indexvalue){
  this.selectedFile = <File>event.target.files[0];   
  console.log(this.selectedFile.name)
  if(this.selectedFile){
    this.productService.updateFiles(this.selectedFile).subscribe(
      (event)=>{
        if (event.type === HttpEventType.Response) {
        this.notification.success('Document uploaded successFully')
        const ProcessForm =this.form.get('process') as FormArray;
        ProcessForm.at(indexvalue).get('pmsDoc').setValue(event.body.id);
      }
      });
   }
 }
 onPirSelect(event,indexvalue){
  this.selectedFile = <File>event.target.files[0];
  console.log(this.selectedFile.name)
  if(this.selectedFile){
    this.productService.updateFiles(this.selectedFile).subscribe(
      (event)=>{
        if (event.type === HttpEventType.Response) {
        this.notification.success('Document uploaded successFully')
        const ProcessForm =this.form.get('process') as FormArray;
        ProcessForm.at(indexvalue).get('pirDoc').setValue(event.body.id);
      }
      });
   }
 }
 onPdirSelect(event,indexvalue){
  this.selectedFile = <File>event.target.files[0];
  console.log(this.selectedFile.name)
  if(this.selectedFile){
    this.productService.updateFiles(this.selectedFile).subscribe(
      (event)=>{
        if (event.type === HttpEventType.Response) {
        this.notification.success('Document uploaded successFully')
        const ProcessForm =this.form.get('process') as FormArray;
        ProcessForm.at(indexvalue).get('pdirDoc').setValue(event.body.id);
      }
      });
   }
 }
 onIsirSelect(event,indexvalue){
  this.selectedFile = <File>event.target.files[0];
  console.log(this.selectedFile.name)
  if(this.selectedFile){
    this.productService.updateFiles(this.selectedFile).subscribe(
      (event)=>{
        if (event.type === HttpEventType.Response) {
        this.notification.success('Document uploaded successFully')
        const ProcessForm =this.form.get('process') as FormArray;
        ProcessForm.at(indexvalue).get('isirDoc').setValue(event.body.id);
      }
      });
   }
 }
//  onFileChange(evt: any) {
//   const target : DataTransfer =  <DataTransfer>(evt.target);
//   if (target.files.length !== 1) throw new Error('Cannot use multiple files');
//   const reader: FileReader = new FileReader();
//   reader.onload = (e: any) => {
//     const bstr: string = e.target.result;
//     const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
//     const wsname : string = wb.SheetNames[0];
//     const ws: XLSX.WorkSheet = wb.Sheets[wsname];
//     console.log(ws);
//     this.data = (XLSX.utils.sheet_to_json(ws, { header: 1 }));
//     console.log(this.data);
//     let x = this.data.slice(1);
//     console.log(x);
//   };
//   reader.readAsBinaryString(target.files[0]);
// }

  onSubmit() {
    if (this.product) {
      this.dialogRef.close();
      this.productService.updateProduct(this.form.value, this.product._id).subscribe(data => {
        console.log(data)
        this.notification.success("Product Edited successfully!!");
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