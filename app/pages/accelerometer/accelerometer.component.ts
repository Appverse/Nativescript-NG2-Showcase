import {Component, NgZone} from '@angular/core';
//USING PLUGIN: NATIVESCRIPT-ACCELEROMETER
import accelerometer = require('nativescript-accelerometer');

@Component({
    selector: 'AccelerometerPage',
    templateUrl: 'pages/accelerometer/accelerometer.html',
    styleUrls: ['pages/accelerometer/accelerometer.css']
})
export class AccelerometerPage {

    private axisData: JSON;
    private accelerometerActive: boolean = false;

    public constructor(private _ngZone: NgZone) {
        this.axisData = JSON.parse('{"x": 0, "y": 0, "z": 0}');
    }
    /* Starts accelerometer updates, returns data = {"x": x, "y": y, "z": z}
       Using ngZone for executing work inside the Angular zone
    */
    public startAccelerometer() {
        this.accelerometerActive = true;
        accelerometer.startAccelerometerUpdates((data)=> {this._ngZone.run(() => {
            this.axisData = data;
        });});

    }
    //Stop accelerometer updates
    public stopAccelerometer() {
        this.accelerometerActive = false;
        accelerometer.stopAccelerometerUpdates();
    }

}
