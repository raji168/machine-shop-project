import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "../auth/auth.service";



@Component({
  selector: "app-login",
  templateUrl: "./prelogin.component.html",
  styleUrls: ["./prelogin.component.scss"]
})

export class PreloginComponent implements OnInit {

  error: boolean;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {

  }

  onSubmit(form) {
    if(form.invaild) {
      return;
    }

    this.authService.login(form.value.username , form.value.password);
   

  }

}
