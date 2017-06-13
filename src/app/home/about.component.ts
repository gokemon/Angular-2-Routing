import { Component } from '@angular/core';
/* imports Angular "core" library modules above and my stuff below */


/* TypeDecorator */
@Component({
    /* Properties */
    templateUrl: './app/home/about.component.html',
    styleUrls: ['./app/home/about.component.css']
})
/* Export class */
export class AboutComponent {
    public pageTitle: string = 'About';
    public developedBy: string = 'Created in Memory:';
    public siteDeveloper: string = 'Adam West';
    public siteDeveloperURL: string = 'http://portfolio.gokemon.xyz/';
    public developedHandle: string = '@gokemon';
} // I set this up so I could swap out i18n bundles later
