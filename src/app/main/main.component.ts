import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  userIsAuthenticated = false  ;
  private authListenerSubs:Subscription;

  @ViewChild(MatAccordion) accordion: MatAccordion;


  constructor(
    private authService:AuthService

    ) { }

  ngOnInit() {

    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authListenerSubs = this.authService
    .getAuthStatusListner()
    .subscribe(isAuthenticated =>{
      this.userIsAuthenticated = isAuthenticated ;
    });

  }

  clickLogout() {
    this.authService.logout();
  }

  ngOnDestroy(){
    this.authListenerSubs.unsubscribe();
  }
}
