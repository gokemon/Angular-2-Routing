import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
// import { RouterModule } from '@angular/router'; /* moved routing to its own module */
/* imports Angular "core" library modules above and my stuff below */

/* Imports for loading & configuring the in-memory web api */
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from './products/product-data';

import { AppRoutingModule } from './app-routing.module';
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
    ProductModule, /* Feature Modules */
    UserModule, /* Feature Modules */
    MessageModule, /* Feature Modules */
    AppRoutingModule /* moved routing to its own module */
  ], // end imports
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent
  ],
  bootstrap: [ AppComponent ]
}) // end declarations
/* Export class */
export class AppModule {
    // code stub
 }
