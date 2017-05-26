import { Injectable } from '@angular/core';
/* imports Angular "core" library modules above and my stuff below */
import { IUser } from './user';
import { MessageService } from '../messages/message.service';


/* TypeDecorator */
@Injectable()
/* Export class */
export class AuthService {
    currentUser: IUser;

    constructor(private messageService: MessageService) { }

    /* Methods (login, logout and isLoggedIn) below */
    isLoggedIn(): boolean {
        return !!this.currentUser;
    }

    login(userName: string, password: string): void {
        if (!userName || !password) {
            this.messageService.addMessage('Please enter your userName and password');
            return;
        }
        if (userName === 'admin') {
            this.currentUser = {
                id: 1,
                userName: userName,
                isAdmin: true
            };
            this.messageService.addMessage('Admin login');
            return;
        }
        this.currentUser = {
            id: 2,
            userName: userName,
            isAdmin: false
        };
        this.messageService.addMessage(`User: ${this.currentUser.userName} logged in`);
    }

    logout(): void {
        this.currentUser = null;
    }
}
