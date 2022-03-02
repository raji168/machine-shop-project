import { Component, OnInit } from '@angular/core';
import { CustomerViewApiService } from 'src/app/services/dashboard/customer-view-api.service';
import { ProductApiService } from 'src/app/services/product-api.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit {

  displayedColumns: string[] = [ 'sno','lotID' ,'productName','partNo', 'status'];

  customerViewData;

  constructor( private customerViewApi:CustomerViewApiService) { }

  ngOnInit(): void {

    this.customerViewApi.get().subscribe(data =>{
      this.customerViewData = data ;
    })

  }
  
  applyFilter(event:Event){

    const filterValue = (event.target as HTMLInputElement).value;
    this.customerViewData.filter = filterValue.trim().toLocaleLowerCase();

  }



}
