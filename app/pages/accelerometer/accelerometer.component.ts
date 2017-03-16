import {Component, NgZone} from '@angular/core';
//USING PLUGIN: NATIVESCRIPT-ACCELEROMETER
import accelerometer = require('nativescript-accelerometer');

@Component({
    moduleId: module.id,
    selector: 'sc-accelerometer-page',
    templateUrl: 'accelerometer.html',
    styleUrls: ['accelerometer.css']
})
export class AccelerometerPage {

    private axisData: JSON;
    private isAccelerometerActive: boolean = false;

    public constructor(private _ngZone: NgZone) {
        this.axisData = JSON.parse('{"x": 0, "y": 0, "z": 0}');
    }
    /* Starts accelerometer updates, returns data = {"x": x, "y": y, "z": z}
       Using ngZone for executing work inside the Angular zone
    */
    public toggleAccelerometer() {
        if(this.isAccelerometerActive) {
            accelerometer.stopAccelerometerUpdates();
        } else {
            accelerometer.startAccelerometerUpdates(
            (data) => {
                this._ngZone.run(() => {
                    this.axisData = data;
                });
            });
        }
        this.isAccelerometerActive = !this.isAccelerometerActive;
    }

}
