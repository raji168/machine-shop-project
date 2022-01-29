import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddMappingComponent } from './add-mapping/add-mapping.component';

@Component({
  selector: 'app-mapping',
  templateUrl: './mapping.component.html',
  styleUrls: ['./mapping.component.scss']
})
export class MappingComponent implements OnInit {

  constructor( private dialog:MatDialog) 
  { }

  ngOnInit(): void {
  }

  onClickMapping(){

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "100%";
    this.dialog.open(AddMappingComponent,dialogConfig);
  }
  

}
