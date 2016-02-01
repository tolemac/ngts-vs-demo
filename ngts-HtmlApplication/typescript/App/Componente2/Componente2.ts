import {ModuleBootstrapper, Component, Injectable, Inject, Inherit} from "ngts/ngts";

@Component({
    template: "Hola desde el componente 2. --> <componente3></componente3>",
    controllerAs: "achopijo"
})
export class Componente2 {
}

@Inherit(Componente2)
@Component({
    template: "<div>HOLA FROM 3</div>"
    
})
export class Componente3 extends Componente2 { }

console.log("Hola");