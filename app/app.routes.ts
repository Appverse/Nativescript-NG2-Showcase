import {Routes} from '@angular/router';

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
import {WrapperComponent} from './pages/wrapper.component';
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

export var routableComponents = [];
export const routes: Routes = [
    { path: '', redirectTo: '/splash', pathMatch: 'full' },
    routeEntry({
        path: 'home', component: WrapperComponent,
        children: [
            routeEntry({ path: '', component: HomePage }),
            routeEntry({ path: 'buttons', component: ButtonsPage }),
            routeEntry({ path: 'text', component: TextPage }),
            routeEntry({ path: 'lists', component: ListsPage }),
            routeEntry({ path: 'pickers', component: PickersPage }),
            routeEntry({ path: 'layouts', component: LayoutsPage }),
            routeEntry({ path: 'selectors', component: SelectorsPage }),
            routeEntry({ path: 'indicators', component: IndicatorsPage }),
            routeEntry({ path: 'images', component: ImagesPage }),
            routeEntry({ path: 'views', component: ViewsPage }),
            routeEntry({ path: 'dialogs', component: DialogsPage }),
            routeEntry({ path: 'login', component: LoginPage }),
            routeEntry({ path: 'contacts', component: ContactsPage }),
            routeEntry({ path: 'table', component: TablePage }),
            routeEntry({ path: 'settings', component: SettingsPage }),
            routeEntry({ path: 'database', component: DatabasePage }),
            routeEntry({ path: 'camera', component: CameraPage }),
            routeEntry({ path: 'codescanner', component: CodeScannerPage }),
            routeEntry({ path: 'signaturepad', component: SignaturePadPage }),
            routeEntry({ path: 'location', component: LocationPage }),
            routeEntry({ path: 'charts', component: ChartsPage }),
            routeEntry({ path: 'accelerometer', component: AccelerometerPage }),
            routeEntry({ path: 'animations', component: AnimationsPage }),
            routeEntry({ path: 'tasks', component: TasksPage })
        ]
    }),
    routeEntry({ path: 'splash', component: SplashScreenComponent })
];

function routeEntry(data) {
    routableComponents.push(data.component);
    return data;
}


