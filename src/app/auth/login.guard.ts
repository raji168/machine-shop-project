import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import {  of } from "rxjs";
import { AuthService } from "./auth.service";


@Injectable()


export class LoginGuard implements CanActivate {

    // user:User;

    constructor(
        private authService: AuthService,
        private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        const token = this.authService.getIsAuth();
        const authUser = this.authService.autoAuthUser;

        if (authUser) {
            return of(true);
        }
        if (!token) {
            this.router.navigate(['/login']);
            return of(false);
        }
        return this.router.navigate(['/main/master'])
    }
}