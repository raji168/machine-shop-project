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

    const name = form.value.username;

    this.authenticationService
      .login(form.value.username, form.value.password)
      // .pipe(first())
      .subscribe(
        data => {
          // const name = data.username;
          switch (data) {
            case data.username == 'customer':
              this.router.navigate(["dashboard/customer-view"]);
              break;
            case data.username == 'admin':
              this.router.navigate(["dashboard/admin"]);
              break;
            case data.username == 'inspector':
              this.router.navigate(["dashboard/inspector"]);
              break;
            case data.username == 'management':
              this.router.navigate(["dashboard/management"]);
              break;
            case data.username == 'manager':
              this.router.navigate(["dashboard/inspector"]);
              break;
            case data.username == 'npd':
              this.router.navigate(["dashboard/npd"]);
              break;
            case data.username == 'supervisor':
              this.router.navigate(['/dashboard/supervisor']);
              break;
            default :
              this.router.navigate(["dashboard/login"]);
              break;
          }
          error => {
            this.error = error;
            // this.loading = false;
          }

        });
  }

}
