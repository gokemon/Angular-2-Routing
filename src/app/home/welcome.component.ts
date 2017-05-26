import { Component } from '@angular/core';
/* imports Angular "core" library modules above and my stuff below */


/* TypeDecorator */
@Component({
    templateUrl: './app/home/welcome.component.html'
})
/* Export class */
export class WelcomeComponent {
    public pageTitle: string = 'Welcome';
    public developedBy: string = 'Developed by:';
    public siteDeveloper: string = 'Michael Gokey';
    public siteDeveloperURL: string = 'http://portfolio.gokemon.xyz/';
    public developedHandle: string = '@gokemon';
} // I set this up so I could swap out i18n bundles later
