import { Component, OnInit, ViewChild} from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { AlertService } from '../shared/alert.service';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  userIsAuthenticated = false  ;
  private authListenerSubs:Subscription;

  userName ;

  @ViewChild(MatAccordion) accordion: MatAccordion;
 

  constructor(
    private authService:AuthService,
    private router:Router,
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

    // this.userName = this.authService
  }

  clickLogout() {
    this.authService.logout();
    this.alert.showSuccess('Logout Successfully','User ');
  }
  
  clickDashboard(){
    this.router.navigate(['/dashboard/admin']);
  }
  ngOnDestroy(){
    this.authListenerSubs.unsubscribe();
  }
}
