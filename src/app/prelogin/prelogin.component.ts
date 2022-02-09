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
    private authenticationService: AuthService
  ) { }

  ngOnInit(): void {

  }

  onSubmit(form) {

    console.log("template Model", form);

    this.authenticationService
      .login(form.value.username, form.value.password)
      // .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(["dashboard/management"]);
        },
        error => {
          this.error = error;
          // this.loading = false;
        }
      );
  }
  
}
