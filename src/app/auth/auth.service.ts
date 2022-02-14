import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";

import { AuthData } from "./auth-data.model";



@Injectable({
    providedIn: 'root'
})


export class AuthService {
    private token: string;
    private tokenTimer: any;
    private authStatusListener = new Subject<boolean>();
    private userId: string;
    private isAuthenticated = false;

    constructor(private http: HttpClient,
        private router: Router) { }

    getToken() {
        return this.token;
    }

    getIsAuth() {
        return this.isAuthenticated;
    }

    getAuthStatusListner() {
        return this.authStatusListener.asObservable();
    }

    login(username:string , password:string ) {
        const authData: AuthData = { userName: username, password: password };
        this.http.post<{
            token: string , userId:string
        }>('http://192.168.0.17:3002/users', authData)
            .subscribe(res => {
                const token = res.token;
                this.token = token;
                console.log(token);
                if (token) {
                    this.isAuthenticated = true;
                    this.userId = res.userId;
                    this.authStatusListener.next(true);
                    this.saveAuthData(token,this.userId);
                    console.log(this.token);
                    this.router.navigate(["/main/master"]);
                }
            })
    }

    // autoAuthUser(){
    //     const authInformation = this.getAuthData();
    //     if(!authInformation){
    //         return;
    //     }
    //   this.token = authInformation.token;
    //   this.isAuthenticated = true;
    //   this.userId = authInformation.userId;
    //   this.authStatusListener.next(true);
    // } 
    // }

    logout() {
        this.token = null;
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        this.userId = null;
        this.clearAuthData();
        this.router.navigate(["/"]);
    }

    private saveAuthData(token: string , userId:string) {
        localStorage.setItem("machine:token", token);
        localStorage.setItem("userId", userId);
    }

    private clearAuthData() {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
    }

    private getAuthData() {
        let token = '' ;
        const userId = localStorage.getItem("userId");
        if (!token) {
            token = localStorage.getItem('machine:token');
        }
        return {
            token: token,
            userId: userId
        }
    }
}