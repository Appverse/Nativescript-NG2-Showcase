import {WrapperComponent} from './pages/wrapper.component';
import {nsProvideRouter} from 'nativescript-angular/router';
import {RouterConfig} from '@angular/router';

import {SplashScreenComponent} from './common/components/splash-screen/splash-screen.component';
import {AccelerometerPage} from './pages/accelerometer/accelerometer.component';
import {SignaturePadPage} from './pages/signaturepad/signaturepad.component';
import {CodeScannerPage} from './pages/codescanner/codescanner.component';
import {IndicatorsPage} from './pages/indicators/indicators.component';
import {AnimationsPage} from './pages/animations/animations.component';
import {SelectorsPage} from './pages/selectors/selectors.component';
import {ContactsPage} from './pages/contacts/contacts.component';
import {SettingsPage} from './pages/settings/settings.component';
import {DatabasePage} from './pages/database/database.component';
import {LocationPage} from './pages/location/location.component';
import {ButtonsPage} from './pages/buttons/buttons.component';
import {PickersPage} from './pages/pickers/pickers.component';
import {LayoutsPage} from './pages/layouts/layouts.component';
import {DialogsPage} from './pages/dialogs/dialogs.component';
import {ImagesPage} from './pages/images/images.component';
import {CameraPage} from './pages/camera/camera.component';
import {ChartsPage} from './pages/charts/charts.component';
import {ViewsPage} from './pages/views/views.component';
import {LoginPage} from './pages/login/login.component';
import {TablePage} from './pages/table/table.component';
import {ListsPage} from './pages/lists/lists.component';
import {TasksPage} from './pages/tasks/tasks.component';
import {HomePage} from './pages/home/home.component';
import {TextPage} from './pages/text/text.component';

const APP_ROUTES: RouterConfig = [
    { path: '', redirectTo: '/splash', pathMatch: 'full' },
    {
        path: 'home', component: WrapperComponent,
        children: [
            { path: '', component: HomePage },
            { path: 'buttons', component: ButtonsPage },
            { path: 'text', component: TextPage },
            { path: 'lists', component: ListsPage },
            { path: 'pickers', component: PickersPage },
            { path: 'layouts', component: LayoutsPage },
            { path: 'selectors', component: SelectorsPage },
            { path: 'indicators', component: IndicatorsPage },
            { path: 'images', component: ImagesPage },
            { path: 'views', component: ViewsPage },
            { path: 'dialogs', component: DialogsPage },
            { path: 'login', component: LoginPage },
            { path: 'contacts', component: ContactsPage },
            { path: 'table', component: TablePage },
            { path: 'settings', component: SettingsPage },
            { path: 'database', component: DatabasePage },
            { path: 'camera', component: CameraPage },
            { path: 'codescanner', component: CodeScannerPage },
            { path: 'signaturepad', component: SignaturePadPage },
            { path: 'location', component: LocationPage },
            { path: 'charts', component: ChartsPage },
            { path: 'accelerometer', component: AccelerometerPage },
            { path: 'animations', component: AnimationsPage },
            { path: 'tasks', component: TasksPage }
        ]
    },
    { path: 'splash', component: SplashScreenComponent }
];
export const APP_ROUTER_PROVIDERS = [
    nsProvideRouter(APP_ROUTES, { enableTracing: false }),
];
