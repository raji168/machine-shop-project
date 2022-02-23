import { HttpClient, HttpResponse } from "@angular/common/http";
import { Component,Inject,OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { Customer } from "src/app/models/customer.model";
import { Product } from "src/app/models/product.model";
import { CustomerApiService } from "src/app/services/customer-api.service";
import { FileUploadService } from "src/app/services/fileupload-api.service";
import { NotificationService } from "src/app/services/notification.service";
import { ProductApiService } from "src/app/services/product-api.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  fileName = '';
  product : Product;
  form:FormGroup;
  customerData: Customer[] = [];

  selectedFiles?: FileList;
  message: string[] = [];
  previews: string[] = [];
  imageInfos?: Observable<any>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data : {product: Product},
    public customerService: CustomerApiService,
    public productService : ProductApiService,
    public uploadService: FileUploadService,
    public dialogRef: MatDialogRef<AddProductComponent>,
    public notification: NotificationService,
    private http: HttpClient,
    private formBulider: FormBuilder
  ){
    this.form=this.formBulider.group({
      customerName:['', Validators.required],
      DrawingNo:['', Validators.required],
      productName:['', Validators.required],
      Drawing:['', Validators.required],
      process:formBulider.array([])
    })
  }
  ngOnInit(): void {
    this.imageInfos = this.uploadService.getFiles();
    this.customerService.getCustomerAll().subscribe(data => {
      this.customerData = data;
    })
  
    this.product = this.data?.product;
    if(this.product) {
      this.form.patchValue(this.product);
      this.form.patchValue(this.customerData)
      // this.form.get('customer').setValue(this.product.customer);
    }
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


  selectFiles(event: any): void {
    this.message = [];
    this.selectedFiles = event.target.files;
    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.previews.push(e.target.result);
        };
        reader.readAsDataURL(this.selectedFiles[i]);
      }
    }
  }

  upload(idx: number, file: File): void {
    if (file) {
      this.uploadService.upload(file).subscribe(
        (event: any) => {
          if (event instanceof HttpResponse) {
            const msg = 'Uploaded the file successfully: ' + file.name;
            this.message.push(msg);
            this.imageInfos = this.uploadService.getFiles();
          }
        },
        (err: any) => {
          const msg = 'Could not upload the file: ' + file.name;
          this.message.push(msg);
        }
      );
    }
  }

  uploadFiles(): void {
    this.message = [];
    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.upload(i, this.selectedFiles[i]);
      }
    }
  }


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



// onFileSelected(event) {
//   const file:File = event.target.files[0];
//   if (file) {
//       this.fileName = file.name;
//       const formData = new FormData();
//       formData.append("thumbnail", file);
//       const upload$ = this.http.post("/api/thumbnail-upload", formData);
//       upload$.subscribe();
//   }
// }


  // selectedFile = null;
  // fileData;
  // onSelectedFile(event){
  //   console.log(event);
  //   this.selectedFile = event.target.files[0];
    // if(event.target.files.length>0){
    //   const file = event.target.files[0];
    //   this.form.get('image').setValue(file);
    // }
  // }
  // onUpload(){
  //   this.productService.getFiles().subscribe(data => {
  //     this.fileData = data
  //   })
  // }