import { Component } from '@angular/core';

@Component({
    templateUrl: './app/home/welcome.component.html'
})
export class WelcomeComponent {
    public pageTitle: string = 'Welcome';
    public developedBy: string = 'Developed by:';
    public siteDeveloper: string = 'Michael Gokey';
    public siteDeveloperURL: string = 'http://portfolio.gokemon.xyz/';
    public developedHandle: string = '@gokemon';
}

// @gokemon
