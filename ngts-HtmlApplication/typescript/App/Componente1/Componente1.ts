import {ModuleBootstrapper, Component, Injectable, Inject} from "ngts/ngts";
import {Componente2} from "../Componente2/Componente2";

@Injectable()
export class Servicio1 {
    saludar() {
        return "hola desde el servicio 1";
    }
}

@Component({
    template: "Hola desde el componente 1. {{$ctrl.servicio.saludar()}} <br/>",
    directives: [Componente2]
})
export class Componente1 {
    constructor(@Inject(Servicio1) public servicio: Servicio1) {
    }
}
