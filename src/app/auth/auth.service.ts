import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { User } from "../models/user.model";

import { AuthData } from "../auth/auth-data.model";
import { AlertService } from "../shared/alert.service";
import { map } from "rxjs/operators";



@Injectable({
    providedIn: 'root'
})


export class AuthService {
    private token: string;
    // private tokenTimer: any;
    private authStatusListener = new Subject<boolean>();
    private user: string;
    private isAuthenticated = false;
    username;

    constructor(private http: HttpClient,
        private alert: AlertService,
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

    // getUserName(){
    //     return this.username;
    // }

    getAuthStatusListner() {
        return this.authStatusListener.asObservable();
    }

    login(username: string, password: string) {
        const authData: AuthData = { userName: username, password: password };
        this.http.post<{
            token: string, user: User
        }>
            ('http://192.168.0.17:3002/auths/login',
                authData
            )
            .subscribe(res => {
                const token = res.token;
                this.token = token;
                console.log('Generated Token    ' + this.token);
                if (token) {
                    this.isAuthenticated = true;
                    this.authStatusListener.next(true);
                    this.saveAuthData(token, this.user);
                    this.username = this.user;
                    // this.getUserName();
                    console.log('Login Successfully')
                    console.log('Token is   ' + this.token);
                    this.alert.showSuccess('Login Successfully', 'User ' + username);
                    console.log(username);
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


    // logout(id: string) {

    //     this.http.post<{id: User }>
    //         ('http://192.168.0.17:3002/auths/logout',
    //             id
    //         )
    //         .subscribe(res => {
    //             if (res) {
    //                 this.token = null;
    //                 this.isAuthenticated = false;
    //                 this.authStatusListener.next(false);
    //                 this.user = null;
    //                 this.clearAuthData();
    //                 console.log('Logout Successfully');
    //                 console.log('Token is   ' + this.token);
    //                 this.alert.showSuccess('Logout Successfully', 'User ' + this.user);
    //                 this.router.navigate(["/login"]);
    //             }
    //         })
    // }

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

    verifyUser(token){
        this.http.post<{user:User}>('http://192.168.0.17:3002/auths/verifyUser' ,
        {token}).pipe(map((res)=>{
            res.user;
        }))
    }

    private saveAuthData(token: string, user: string) {
        localStorage.setItem("machine:token", token);
        localStorage.setItem("user", user);
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