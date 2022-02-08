import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { delay, dematerialize, materialize, mergeMap } from "rxjs/operators";

import { User } from '../auth/user.model';

const users: User[] = [
    { id: 1, username: 'admin', password: 'admin' },
    // { id: 2, username: 'manager', password: 'manager123' },
    // { id: 3, username: 'supervisor', password: 'supervisor123' },
    // { id: 4, username: 'npd', password: 'npd123' },
    // { id: 5, username: 'inspector', password: 'inspector123' },
    // { id: 6, username: 'customer', password: 'customer456' },
    // { id: 7, username: 'management', password: 'management123' }
]


@Injectable()



export class BackendInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = req;


        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());


        function handleRoute() {
            switch (true) {
                case url.endsWith('/users/authenticate') && method === 'POST':
                    return authenticate();
                case url.endsWith('/user') && method === 'GET':
                    return getUsers();
                default:
                    return next.handle(req);
            }
        }

        function authenticate() {
            const { username, password } = body;
            const user = users.find(x => x.username === username && x.password === password);
            if (!user) return error('Username or Password is incorrect')
            return ok({
                id: user.id,
                username: user.username,
            })

        }

        function getUsers() {
            if (!isLoggedIn()) return unauthorized();
            return ok(users);
        }

        function ok(body?) {
            return of(new HttpResponse({ status: 200, body }))
        }

        function error(message) {
            return throwError({ error: { message } });
        }

        function unauthorized() {
            return throwError({ status: 401, error: { message: 'Unauthorized' } });
        }

        function isLoggedIn() {
            return headers.get('Authorization') === `Basic ${window.btoa('admin:admin')}`;
        }
    }
}

export let BackendProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: BackendInterceptor,
    multi: true
};
