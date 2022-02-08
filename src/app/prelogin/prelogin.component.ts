import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-prelogin',
  templateUrl: './prelogin.component.html',
  styleUrls: ['./prelogin.component.scss']
})

export class PreloginComponent implements OnInit {

  loginForm: FormGroup;
  hide = true;
  loading = false;
  submitted = false;
  returnUrl:string;
  error ='';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route:ActivatedRoute,
    private authService:AuthService) 
    { 
      if(this.authService.userValue) {
        this.router.navigate(['main/dashboard']);
      }
    }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'main/dashboard';
  }

  get f() {
    return this.loginForm.controls;
  }

  clickLogin() {

    this.submitted = true ;
    
    if(this.loginForm.invalid){
      return ;
    }
    
    this.loading = true ;
    this.authService.login(this.f.username.value, this.f.password.value)
    .pipe(first())
    .subscribe(
      data => {
        this.router.navigate([this.returnUrl]);
      },
      error =>{
        this.error =error;
        this.loading =false ;
      });
    
  }

}
