import { Injectable } from '@angular/core';

/* TypeDecorator */
@Injectable()
/* Export class */
export class MessageService {
    private messages: string[] = [];

    addMessage(message: string): void {
        let currentDate = new Date();
        this.messages.unshift(message + ' at ' + currentDate.toLocaleString());
    }
} // message service
