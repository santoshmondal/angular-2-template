/**
 * Created by santosh on 11/7/16.
 */
import {Component} from 'angular2/core';

import {NestedComponent} from './nested.component';
import {Config} from './config.service';


@Component({
    selector : "app2",
    templateUrl : "./app/ts/app.component2.html",
    directives : [NestedComponent]
})
export class AppComponent2 {
    name:string = Config.cname + "_2";

    constructor(){
    }
}


