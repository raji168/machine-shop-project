import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild(MatAccordion) accordion: MatAccordion;


  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  clickLogout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['login']);
  }

}
