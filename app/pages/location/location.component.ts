import {Component} from '@angular/core';
//USING PLUGIN: NATIVESCRIPT-GEOLOCATION
import geolocation = require('nativescript-geolocation');

@Component({
    moduleId: module.id,
    selector: 'sc-location-page',
    templateUrl: 'location.html',
    styleUrls: ['location.css']
})
export class LocationPage {

    private currentLocation;
    private isLocation: boolean = false;

    /* Requests location rights */
    public enableLocation() {
        if (!geolocation.isEnabled()) {
            console.log('enabling location request');
            geolocation.enableLocationRequest();
        }
    }
    /* Gets the currents location using an Observable to handle async call */
    public getLocation() {
        if (geolocation.isEnabled()) {
            geolocation
                .getCurrentLocation({ desiredAccuracy: 3, updateDistance: 10, maximumAge: 20000, timeout: 20000 })
                .then((loc) => {
                    this.currentLocation = loc;
                    this.isLocation = true;
                });
        } else {
            console.log('Location isn\'t enabled!');
        }

    }

    /* LOCATION MONITORING DOESNT WORKS THROUGH TYPESCRIPT AT 21/06/16 */
}
