import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
/* imports Angular "core" library modules above and my stuff below */
import { StarComponent } from './star.component';


/* TypeDecorator */
@NgModule({
  imports: [ CommonModule],
  exports : [
    CommonModule,
    FormsModule,
    StarComponent
  ],
  declarations: [ StarComponent ],
})
/* Export class */
export class SharedModule { 
  // code stub
}
