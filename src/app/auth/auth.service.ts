import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { User } from "../models/user.model";

import { AuthData } from "../auth/auth-data.model";



@Injectable({
    providedIn: 'root'
})


export class AuthService {
    private token: string;
    private tokenTimer: any;
    private authStatusListener = new Subject<boolean>();
    private user: string;
    private isAuthenticated = false;

    constructor(private http: HttpClient,
        private router: Router) { }

    getToken() {
        return this.token;
    }

    getIsAuth() {
        return this.isAuthenticated;
    }

    getUser() {
        return this.user;
    }

    getAuthStatusListner() {
        return this.authStatusListener.asObservable();
    }

    login(username: string, password: string) {
        const authData : AuthData = { userName: username,password : password };
        this.http.post<{
            token: string, user: User
        }>
            ('http://192.168.0.17:3002/auths/login',
                authData
            )
            .subscribe(res => {
                const token = res.token;
                this.token = token;
                console.log('Generated Token    '+ this.token);
                if (token) {
                    this.isAuthenticated = true;
                    this.authStatusListener.next(true);
                    this.saveAuthData(token, this.user);
                    console.log('Login Successfully')
                    console.log('Token is   '+this.token);
                    this.router.navigate(["/main/master"]);
                }
            })
    }

    autoAuthUser() {
        const authInformation = this.getAuthData();
        if (!authInformation) {
            return;
        }
        this.token = authInformation.token;
        this.isAuthenticated = true;
        this.user = authInformation.userId;
        this.authStatusListener.next(true);
    }


    logout() {
        this.token = null;
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        this.user = null;
        this.clearAuthData();
        console.log('Logout Successfully');
        console.log('Token is   '+this.token);
        this.router.navigate(["/login"]);
    }

    private saveAuthData(token: string, user: string) {
        localStorage.setItem("machine:token", token);
        localStorage.setItem("userId", user);
    }

    private clearAuthData() {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    }

    private getAuthData() {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem("user");
        if (!token) {

        }
        return {
            token: token,
            userId: user
        }
    }
}