import { NgModule } from '@angular/core';
/* imports Angular "core" library modules above and my stuff below */
import { SharedModule } from '../shared/shared.module';

import { MessageComponent } from './message.component';
import { MessageService } from './message.service';


/* TypeDecorator */
@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        MessageComponent
    ],
    providers: [
        MessageService
    ]
})
/* Export class */
export class MessageModule { 
    //code stub
}
