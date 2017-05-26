import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
/* imports Angular "core" library modules above and my stuff below */
import { LoginComponent } from './login.component';
import { AuthService } from './auth.service';

import { SharedModule } from '../shared/shared.module';


/* TypeDecorator */
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
       { path: 'login', component: LoginComponent }
    ])
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    AuthService
  ]
})
/* Export class */
export class UserModule { 
  // code stub
}
