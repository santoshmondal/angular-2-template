/**
 * Created by santosh on 11/7/16.
 */
import {Component} from 'angular2/core';
import {Config} from './config.service';


@Component({
    selector : "app1",
    templateUrl : "./app/ts/app.component1.html"
})

export class AppComponent1 {
    name:string = Config.cname;
}


