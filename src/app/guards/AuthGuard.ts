import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router,
        private afAuth: AngularFireAuth ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.afAuth.authState.pipe(
            map(user => {
                console.log(user);
                if (user !== null) {
                    console.log("here");
                    return true;
                } else {
                    this.router.navigate(['/home']);
                    console.log("here+here");
                    return false;
                }
            },
                error => {
                    this.router.navigate(['/']);
                    return false;
                }));
    }

}
