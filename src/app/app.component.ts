import { Component } from '@angular/core';
import { Router  } from '@angular/router';
/* Imports Angular "core" library modules above and my stuff below */
import { AuthService } from './user/auth.service';


/* TypeDecorator */
@Component({
    /* properties */
    // no selector
    selector: 'pm-app',
    templateUrl: './app/app.component.html'
})
/* Export class */
export class AppComponent {
    pageTitle: string = 'Acer Products';

    constructor(private authService: AuthService,
                private router: Router) { }


    logOut(): void {
        this.authService.logout();
        console.log('Log out');
        this.router.navigateByUrl('/welcome');
    }
} //    selector: 'pm-app',
