import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild(MatAccordion) accordion: MatAccordion;
  user:User;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
      this.authService.user.subscribe(x=> this.user = x);
  }

  ngOnInit(): void {
      
  }

  clickLogout(){
    this.authService.logout();
  }
}
