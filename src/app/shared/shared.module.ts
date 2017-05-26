import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
/* imports Angular "core" library modules above and my stuff below */
import { StarComponent } from './star.component';


/* TypeDecorator */
@NgModule({
  imports: [ 
    CommonModule
  ], // end imports
  exports : [
    CommonModule,
    FormsModule,
    StarComponent
  ], // end exports
  declarations: [ StarComponent ],
}) // end declarations
/* Export class */
export class SharedModule { 
  // code stub
}
