import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
/* imports Angular "core" library modules above and my stuff below */

/* Imports for loading & configuring the in-memory web api */
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from './products/product-data';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';

/* Feature Modules */
import { ProductModule } from './products/product.module';
import { UserModule } from './user/user.module';
import { MessageModule } from './messages/message.module';


/* TypeDecorator */
@NgModule({
  imports: [
    BrowserModule, // pulls basic directives like ngif & ngfor
    HttpModule, // helps us get and save data
    InMemoryWebApiModule.forRoot(ProductData, { delay: 1000 }),
    // inMemory simulates calls to a back-end web service for data
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ]), // forRoot RouterModule array added
    ProductModule, /* Feature Modules */
    UserModule, /* Feature Modules */
    MessageModule /* Feature Modules */
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent
  ],
  bootstrap: [ AppComponent ]
})
/* Export class */
export class AppModule {
    // code stub
 }
