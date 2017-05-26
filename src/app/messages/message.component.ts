import { Component } from '@angular/core';
import { Router } from '@angular/router';
/* imports Angular "core" library modules above and my stuff below */
import { MessageService } from '../messages/message.service';

/* TypeDecorator */
@Component({
    template: `
        <div class="row">
            <h4 class="col-md-10">Message Log</h4>
            <span class="col-md-2">
                <a class="btn btn-default"
                    (click)="close()">
                    x
                </a>
            </span>
        </div>
        <div *ngFor="let message of messageService.messages; let i=index">
            <div *ngIf="i<10" class="message-row">
                {{ message }}
            </div>
        </div>
    `,
    styles: [
        '.message-row { margin-bottom: 10px }'
    ]
})
/* Export class */
export class MessageComponent {

    constructor(private messageService: MessageService,
                private router: Router) { }
    /* methods */
    close(): void {
        // Close the popup.
    }
}
