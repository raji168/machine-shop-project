import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "../auth/auth.service";
import { AlertService } from "../shared/alert.service";



@Component({
  selector: "app-login",
  templateUrl: "./prelogin.component.html",
  styleUrls: ["./prelogin.component.scss"]
})

export class PreloginComponent  {

  error: boolean;
  isLoading = false ;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    private authService: AuthService,
    private alert:AlertService
  ) { }

  onSubmit(form) {

    if(form.invaild) {
      return;
    }
    this.isLoading = true;
    this.authService.login(form.value.username , form.value.password);
    this.alert.showSuccess('Login Successfully','User '+form.value.username);
    console.log(form.value);
  }


}
