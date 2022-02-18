import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-productlibrary',
  templateUrl: './productlibrary.component.html',
  styleUrls: ['./productlibrary.component.scss']
})
export class ProductLibraryComponent implements OnInit {
  userIsAuthenticated: false;
  private authListenerSubs:Subscription;

  constructor( private authService:AuthService) { }

  ngOnInit() {
    // this.userIsAuthenticated = this.authService.getIsAuth();
    // this.authListenerSubs = this.authService
    // .getAuthStatusListner()
    // .subscribe(isAuthenticated =>{
    //   this.userIsAuthenticated = isAuthenticated ;
    // });
  }

}
