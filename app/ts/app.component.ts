import {Component} from 'angular2/core';
import {Config} from './config.service';

@Component({
    selector: 'my-app',
    template: '<h1>Angular 2 Template {{title}} {{id}} {{cname}}</h1>'
})
export class AppComponent {
    title = Config.title;
    cname = Config.cname;
    id = Config.id;
}
