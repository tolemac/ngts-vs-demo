import {Component} from "ngts/ngts";
import {Componente1} from "../Componente1/Componente1";
import {Componente2} from "../Componente2/Componente2";

@Component({
    template: `
<div>Home</div>
<a ng-link="['./Cmp1']">Compo1</a>
<a ng-link="['./Cmp2']">Compo2</a>
<ng-outlet></ng-outlet>
`,
    $routeConfig: [
        {
            path: '/cmp1',
            component: 'componente1',
            name: 'Cmp1',
            useAsDefault: true
        }, {
            path: '/cmp2',
            component: 'componente2',
            name: 'Cmp2'
        }],
    directives: [Componente1, Componente2]
})
export class Home {
}
