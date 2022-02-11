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
//           switch (form.value.username == name) {
//     case admin :
//         console.log("Result: 0");
//         break;
//     case 5:
//         console.log("Result: 5");
//         break;
//     case 10:
//         console.log("Result: 10");
//         break;
// }
          this.router.navigate(["dashboard/customer-view"]);
        },
        error => {
          this.error = error;
          // this.loading = false;
        }
      );
  }
  
}
