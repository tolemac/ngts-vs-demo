import {Component, Inject} from "ngts/ngts";
import {Home} from "../Home/Home";
import {About} from "../About/About";

@Component({
    template: `
<div>AppRoot</div>
<a ng-link="['./Home']">Home</a>
<a ng-link="['./About']">About</a>
<ng-outlet></ng-outlet>
`,
    $routeConfig: [
        {
            path: '/home',
            component: 'home',
            name: 'Home',
            useAsDefault: true
        }, {
            path: '/about',
            component: 'about',
            name: 'About'
        }],
    directives: [Home, About]
})
export class AppRootComponent {
    constructor( @Inject("$router") $router) { }

}