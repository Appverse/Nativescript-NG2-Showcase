import {Component} from '@angular/core';
import dialogs = require('ui/dialogs');

@Component({
    moduleId: module.id,
    selector: 'sc-dialogs-page',
    templateUrl: 'dialogs.html',
    styleUrls: ['dialogs.css']
})
export class DialogsPage {

    //Alert dialog
    public alert(options: boolean) {
        if(options) {
            dialogs.alert({
                title: 'Your title',
                message: 'Your message',
                okButtonText: 'Your button text'
            }).then(()=> {
                console.log('Dialog closed!');
            });
        } else {
            dialogs.alert('Your message').then(()=> {
                console.log('Dialog closed!');
            });
        }
    }
    //Confirm dialog
    public confirm(options: boolean) {
        if(options) {
            dialogs.confirm({
                title: 'Your title',
                message: 'Your message',
                okButtonText: 'Your button text',
                cancelButtonText: 'Cancel text',
                neutralButtonText: 'Neutral text'
            }).then(function (result) {
                // RESULT IS BOOLEAN
                console.log('Dialog result: ' + result);
            });
        } else {
            dialogs.confirm('Your message').then(result => {
                console.log('Dialog result: ' + result);
            });
        }
    }
    // Prompt dialog
    public prompt(options: boolean) {
        if(options) {
            // inputType PROPERTY CAN BE dialogs.inputType.password OR dialogs.inputType.text.
                dialogs.prompt({
                title: 'Your title',
                message: 'Your message',
                okButtonText: 'Your button text',
                cancelButtonText: 'Cancel text',
                neutralButtonText: 'Neutral text',
                defaultText: 'Default text',
                inputType: dialogs.inputType.password
            }).then(function (r) {
                console.log('Dialog result: ' + r.result + ', text: ' + r.text);
            });
        } else {
            // SECOND ARGUMENT OPTIONAL
            dialogs.prompt('Your message', 'Default text').then(r => {
                console.log('Dialog result: ' + r.result + ', text: ' + r.text);
            });
        }
    }
    //Login dialog
    public login(options: boolean) {
        if(options) {
            dialogs.login({
                title: 'Your title',
                message: 'Your message',
                okButtonText: 'Your button text',
                cancelButtonText: 'Cancel button text',
                neutralButtonText: 'Neutral button text',
                userName: 'User name label text',
                password: 'Password label text'
            }).then(function (r) {
                console.log('Dialog result: ' + r.result + ', user: ' + r.userName + ', pwd: ' + r.password);
            });
        } else {
            // USER NAME AND PASSWORD OPTIONAL
            dialogs.login('Your message', 'User name label text', 'Password label text').then(function (r) {
                console.log('Dialog result: ' + r.result + ', user: ' + r.userName + ', pwd: ' + r.password);
            });
        }
    }
    //Action dialog
    public action(options: boolean) {
        if(options) {
            dialogs.action({
                message: 'Your message',
                cancelButtonText: 'Cancel text',
                actions: ['Option1', 'Option2']
            }).then(function (result) {
                console.log('Dialog result: ' + result);
            });
        } else {
        dialogs.action('Your message', 'Cancel button text', ['Option1', 'Option2']).then(function (result) {
            console.log('Dialog result: ' + result);
        });
        }
    }
}
