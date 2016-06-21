import {Component} from "@angular/core";
import * as Rx from "rxjs";
//USING PLUGIN: NATIVESCRIPT-GEOLOCATION
import geolocation = require("nativescript-geolocation");

@Component({
    selector: "LocationPage",
    templateUrl: 'pages/location/location.html',
    styleUrls: ['pages/location/location.css']
})
export class LocationPage {

    private currentLocation;
    private isLocation: boolean = false;

    public constructor(){
    }

    /* Requests location rights */
    public enableLocation(){
        if (!geolocation.isEnabled()) {
            console.log("enable location request")
            geolocation.enableLocationRequest();
        }
    }
    /* Gets the currents location using an Observable to handle async call */
    public getLocation(){
        if (geolocation.isEnabled()) {
            let location: Rx.Observable<any>;
            location = Rx.Observable.fromPromise(geolocation.getCurrentLocation({desiredAccuracy: 3, updateDistance: 10, maximumAge: 20000, timeout: 20000}))
            location.subscribe((loc)=>{
                this.currentLocation = loc;
                this.isLocation = true;
            })
        } else {
            console.log("Location isn't enabled!")
        }
        
    }

    /* LOCATION MONITORING DOESNT WORKS THROUGH TYPESCRIPT AT 21/06/16 */
}