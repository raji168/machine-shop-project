import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-machine-mapping',
  templateUrl: './machine-mapping.component.html',
  styleUrls: ['./machine-mapping.component.scss']
})
export class MachineMappingComponent implements OnInit {

  searchKey: string;

  constructor() { }

  ngOnInit(): void {
  }

  applyFilter() {
    // this.grdlistData.filter = this.searchKey.trim().toLocaleLowerCase();
  }
  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }
}
