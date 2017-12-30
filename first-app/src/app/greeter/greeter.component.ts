import { Component } from '@angular/core';

@Component({
    selector : 'app-greet',
    templateUrl : 'greeter.component.html'
})

export class GreeterComponent {
    message : string = '';
    onGreetClick(){
        this.message='User actioned message';
    }
}