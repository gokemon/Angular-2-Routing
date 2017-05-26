import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router  } from '@angular/router';
/* imports Angular "core" library modules above and my stuff below */

/* Feature Modules */
import { AuthService } from './auth.service';

/* TypeDecorator */
@Component({
    templateUrl: './app/user/login.component.html'
})
/* Export class */
export class LoginComponent {
    errorMessage: string;
    pageTitle: string = 'Log In';
    userName: string =  'User Name';

    constructor(private authService: AuthService,
                private router: Router) { }

    /* login method */
    login(loginForm: NgForm) {
        if (loginForm && loginForm.valid) {
            let userName = loginForm.form.value.userName;
            let password = loginForm.form.value.password;
            this.authService.login(userName, password);

            // Navigate to the Product List page after log in.
            this.router.navigateByUrl('/products');
        } else {
            this.errorMessage = 'Please enter a user name and password.';
        };
    }// login method
}
