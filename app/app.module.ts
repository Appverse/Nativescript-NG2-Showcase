import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { WrapperComponent } from './pages/wrapper.component';
import { AccelerometerPage } from './pages/accelerometer/accelerometer.component';
import { SignaturePadPage } from './pages/signaturepad/signaturepad.component';
import { CodeScannerPage } from './pages/codescanner/codescanner.component';
import { IndicatorsPage } from './pages/indicators/indicators.component';
import { AnimationsPage } from './pages/animations/animations.component';
import { SelectorsPage } from './pages/selectors/selectors.component';
import { ContactsPage } from './pages/contacts/contacts.component';
import { SettingsPage } from './pages/settings/settings.component';
import { DatabasePage } from './pages/database/database.component';
import { LocationPage } from './pages/location/location.component';
import { ButtonsPage } from './pages/buttons/buttons.component';
import { PickersPage } from './pages/pickers/pickers.component';
import { LayoutsPage } from './pages/layouts/layouts.component';
import { DialogsPage } from './pages/dialogs/dialogs.component';
import { ImagesPage } from './pages/images/images.component';
import { CameraPage } from './pages/camera/camera.component';
import { ChartsPage } from './pages/charts/charts.component';
import { ViewsPage } from './pages/views/views.component';
import { LoginPage } from './pages/login/login.component';
import { TablePage } from './pages/table/table.component';
import { ListsPage } from './pages/lists/lists.component';
import { TasksPage } from './pages/tasks/tasks.component';
import { HomePage } from './pages/home/home.component';
import { TextPage } from './pages/text/text.component';

import { SplashScreenComponent } from './common/components/splash-screen/splash-screen.component';
import { ShowcaseLayout } from './common/components/showcase-layout/showcase-layout.component';
import { SideDrawerComponent } from './common/components/side-drawer/side-drawer.component';
import { ExitModalComponent } from './common/components/exit-modal/exit-modal.component';

import { ContentService } from './common/services/content.service';

import { NativeScriptUISideDrawerModule } from "nativescript-telerik-ui-pro/sidedrawer/angular";
import { NativeScriptUIChartModule } from "nativescript-telerik-ui-pro/chart/angular";
import { SIDEDRAWER_DIRECTIVES } from "nativescript-telerik-ui-pro/sidedrawer/angular";
import { CHART_DIRECTIVES } from 'nativescript-telerik-ui-pro/chart/angular';


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        AppComponent,
        ShowcaseLayout,
        WrapperComponent,
        ExitModalComponent,
        SideDrawerComponent,
        SplashScreenComponent,
        SignaturePadPage,
        AccelerometerPage,
        CodeScannerPage,
        IndicatorsPage,
        AnimationsPage,
        SelectorsPage,
        ContactsPage,
        SettingsPage,
        DatabasePage,
        LocationPage,
        LocationPage,
        ButtonsPage,
        PickersPage,
        LayoutsPage,
        DialogsPage,
        ImagesPage,
        CameraPage,
        ChartsPage,
        ViewsPage,
        LoginPage,
        TablePage,
        ListsPage,
        TasksPage,
        HomePage,
        TextPage,
        SIDEDRAWER_DIRECTIVES,
        CHART_DIRECTIVES
    ],
    providers: [
        NativeScriptUISideDrawerModule,
        NativeScriptUIChartModule,
        ContentService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
