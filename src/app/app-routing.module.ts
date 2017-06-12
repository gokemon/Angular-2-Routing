import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
/* Imports Angular "core" library modules above and my stuff below */
import { AboutComponent } from './home/about.component';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';


const ROUTES =  [
    { path: 'welcome', component: WelcomeComponent },
    { path: 'about', component: AboutComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

/* TypeDecorator */
@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES),
    ], // end imports
     exports : [
        RouterModule
    ], // end exports
})
/* Export class */
export class AppRoutingModule {
    // code stub
 }