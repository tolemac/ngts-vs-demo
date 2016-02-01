import {ModuleBootstrapper} from "ngts/ngts";
import {AppRootComponent} from "./AppRoot/AppRoot";


var boot = new ModuleBootstrapper("emApp", ["ngMaterial", "ngComponentRouter"]);

boot.bootStrap([AppRootComponent]);
