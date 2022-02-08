import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthService } from "./auth.service";

@Injectable()


export class AuthInterceptor implements HttpInterceptor{

    constructor(private authService:AuthService){}


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
         
        const user = this.authService.userValue;
        const isLoggedIn = user && user.authdata;
        const isApiUrl = req.url.startsWith(environment.apiUrl);
        if(isLoggedIn && isApiUrl){
            req = req.clone({
                setHeaders:{
                    Authorization : ` Basic ${user.authdata}`
                }
            });
        }

        return next.handle(req);
    }
}