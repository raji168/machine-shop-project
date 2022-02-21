import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { User } from "../models/user.model";
import { AuthService } from "./auth.service";


@Injectable()


export class AuthGuard implements CanActivate {

    // user:User;

    constructor(
        private authService: AuthService,
        private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        if (this.authService.login) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
         }
}