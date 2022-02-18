import { Component, OnInit, ViewChild , OnDestroy} from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { User } from '../models/user.model';
import { AlertService } from '../shared/alert.service';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  userIsAuthenticated = false  ;
  private authListenerSubs:Subscription;

  user;

  @ViewChild(MatAccordion) accordion: MatAccordion;
 

  constructor(
    private authService:AuthService,
    private alert:AlertService

    ) { }

  ngOnInit() {
    console.log('Initial'+this.userIsAuthenticated);
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authListenerSubs = this.authService
    .getAuthStatusListner()
    .subscribe(isAuthenticated =>{
      this.userIsAuthenticated = isAuthenticated ;
    });


  }

  clickLogout() {
    // this.authService.logout(this.user._id);
    this.authService.logout();
    this.alert.showSuccess('Logout Successfully','User ');
  }

  ngOnDestroy(){
    this.authListenerSubs.unsubscribe();
  }
}
