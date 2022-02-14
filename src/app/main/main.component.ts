import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { UserService } from '../auth/user.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  userData;

  @ViewChild(MatAccordion) accordion: MatAccordion;


  constructor(
    private router: Router,
    private userService:UserService) { }

  ngOnInit(): void {

  }

  clickLogout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['login']);
  }

}
