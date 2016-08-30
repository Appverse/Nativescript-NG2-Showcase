// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {nativeScriptBootstrap} from 'nativescript-angular/application';

import { provide, PLATFORM_PIPES, PLATFORM_DIRECTIVES} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {NS_ROUTER_DIRECTIVES} from 'nativescript-angular/router';
import {NS_HTTP_PROVIDERS} from 'nativescript-angular/http';

import {TranslateLoader, TranslateService, TranslatePipe} from 'ng2-translate/ng2-translate';
import {TNSTranslateLoader} from 'nativescript-ng2-translate/nativescript-ng2-translate';
import { CHART_PROVIDERS } from 'nativescript-telerik-ui-pro/chart/angular';
import {SIDEDRAWER_PROVIDERS} from 'nativescript-telerik-ui-pro/sidedrawer/angular';

import {AppComponent} from './app.component';
import {APP_ROUTER_PROVIDERS} from './app.routes';

const APP_PROVIDERS = [
    provide(TranslateLoader, {
        useFactory: () => {
            return new TNSTranslateLoader('assets/i18n');
        }
    }),
    TranslateService,
    CHART_PROVIDERS,
    provide(PLATFORM_PIPES, { useValue: TranslatePipe, multi: true }),
    SIDEDRAWER_PROVIDERS
];

nativeScriptBootstrap(AppComponent, [
    provide(PLATFORM_DIRECTIVES, { useValue: ROUTER_DIRECTIVES, multi: true }),
    provide(PLATFORM_DIRECTIVES, { useValue: NS_ROUTER_DIRECTIVES, multi: true }),
    NS_HTTP_PROVIDERS,
    APP_PROVIDERS,
    APP_ROUTER_PROVIDERS
], { startPageActionBarHidden: false }); // https://github.com/NativeScript/nativescript-angular/issues/121

