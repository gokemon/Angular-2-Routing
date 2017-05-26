import { NgModule } from '@angular/core';
/* imports Angular "core" library modules above and my stuff below */
import { LoginComponent } from './login.component';
import { AuthService } from './auth.service';

import { SharedModule } from '../shared/shared.module';


/* TypeDecorator */
@NgModule({
  imports: [
    SharedModule
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
