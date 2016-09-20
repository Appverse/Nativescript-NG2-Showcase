import { NgModule } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/platform';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NativeScriptHttpModule } from 'nativescript-angular/http';
import { AppComponent } from './app.component';
import { routes, routableComponents } from './app.routes';
import { TranslateModule, TranslateLoader } from 'ng2-translate/ng2-translate';
import { TNSTranslateLoader } from 'nativescript-ng2-translate/nativescript-ng2-translate';
import { SIDEDRAWER_DIRECTIVES } from 'nativescript-telerik-ui-pro/sidedrawer/angular';
import { CHART_DIRECTIVES } from 'nativescript-telerik-ui-pro/chart/angular';
import { ContentService } from './common/services/content.service';
import { ShowcaseLayout } from './common/components/showcase-layout/showcase-layout.component';
import { SideDrawerComponent } from './common/components/side-drawer/side-drawer.component';
import { ExitModalComponent } from './common/components/exit-modal/exit-modal.component';

@NgModule({
    declarations: [
        AppComponent,
        ShowcaseLayout,
        SideDrawerComponent,
        ExitModalComponent,
        SIDEDRAWER_DIRECTIVES,
        CHART_DIRECTIVES,
        ...routableComponents
    ],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptHttpModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes),
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: () => new TNSTranslateLoader('assets/i18n')
        })
    ],
    providers: [
        ContentService
    ]
})
export class AppComponentModule { }
