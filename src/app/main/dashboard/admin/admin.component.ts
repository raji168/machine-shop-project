import { Component, OnInit } from '@angular/core';
import { CustomerApiService } from 'src/app/services/customer-api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  displayedColumns: string[] = [ 'sno','customerName','lotNo' ,'productName','partNo', 'status'];
 


  constructor(
    
    ) {

   }


  ngOnInit(): void {
  }

}
