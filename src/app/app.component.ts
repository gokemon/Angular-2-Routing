import { Component } from '@angular/core';
/* Imports Angular "core" library modules above and my stuff below */
import { AuthService } from './user/auth.service';


/* TypeDecorator */
@Component({
    /* properties */
    selector: 'pm-app',
    templateUrl: './app/app.component.html'
})
/* Export class */
export class AppComponent {
    pageTitle: string = 'Acme Product Management';

    constructor(private authService: AuthService) { }

    logOut(): void {
        this.authService.logout();
        console.log('Log out');
    }
}
