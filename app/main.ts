// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {nativeScriptBootstrap} from "nativescript-angular/application";
import { CHART_PROVIDERS } from 'nativescript-telerik-ui-pro/chart/angular';
import {AppComponent} from "./app.component";

nativeScriptBootstrap(AppComponent, [CHART_PROVIDERS]);