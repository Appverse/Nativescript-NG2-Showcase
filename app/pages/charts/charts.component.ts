import {Component, ViewChild, ElementRef} from "@angular/core";
import { ObservableArray } from "data/observable-array";
import chart = require("nativescript-telerik-ui-pro/chart");

//USING PLUGIN: NATIVESCRIPT-DRAWINGPAD

@Component({
    selector: "ChartsPage",
    templateUrl: 'pages/charts/charts.html',
    styleUrls: ['pages/charts/charts.css']
})
export class ChartsPage {

    private _categoricalSource: ObservableArray<any>;
    private _categoricalSource2: ObservableArray<any>;
    private _rangeBarSource: ObservableArray<any>;
    private _highDataModel: ObservableArray<any>;
    private _middleDataModel: ObservableArray<any>;
    private _lowDataModel: ObservableArray<any>;
    private trackball: chart.Trackball;

    public constructor(){
        this.trackball = new chart.Trackball();
        this.trackball.showIntersectionPoints = true;
        this.trackball.snapMode = "ClosestPoint"
    }

    get categoricalSource(): ObservableArray<any> {
        return this._categoricalSource;
    }

    get categoricalSource2(): ObservableArray<any> {
        return this._categoricalSource2;
    }

    get rangeBarSource(): ObservableArray<any>  {
        return this._rangeBarSource;
    }

    get highDataModel(): ObservableArray<any>  {
        return this._highDataModel;
    }
    
    get middleDataModel(): ObservableArray<any>  {
        return this._middleDataModel;
    }
    
    get lowDataModel(): ObservableArray<any>  {
        return this._lowDataModel;
    }

    ngOnInit() {
        this._categoricalSource = new ObservableArray([
            { Country: "Germany", Amount: 15},
            { Country: "France", Amount: 13},
            { Country: "Bulgaria", Amount: 24},
            { Country: "Spain", Amount: 11},
            { Country: "USA", Amount: 18}
        ]);
        this._categoricalSource2 = new ObservableArray([
            { Country: "Germany", Amount: 10},
            { Country: "France", Amount: 17},
            { Country: "Bulgaria", Amount: 5},
            { Country: "Spain", Amount: 23},
            { Country: "USA", Amount: 12}
        ]);
        this._rangeBarSource = new ObservableArray([
            { Name: "Groceries", High: 30, Low: 12 },
            { Name: "Tools", High: 135, Low: 124 },
            { Name: "Electronics", High: 55, Low: 12 },
            { Name: "Gardening", High: 50, Low: 29 }
        ])
        this._highDataModel = new ObservableArray([
            { Year: 2000, Amount: 15, Impact: 1, Country: "", SecondVal: 0, ThirdVal: 0 },
            { Year: 1456, Amount: 13, Impact: 7, Country: "", SecondVal: 0, ThirdVal: 0 },
            { Year: 1866, Amount: 25, Impact: 10, Country: "", SecondVal: 0, ThirdVal: 0 },
            { Year: 1900, Amount: 5, Impact: 3, Country: "", SecondVal: 0, ThirdVal: 0 },
            { Year: 1700, Amount: 17, Impact: 4, Country: "", SecondVal: 0, ThirdVal: 0 },
            { Year: 1600, Amount: 20, Impact: 1, Country: "", SecondVal: 0, ThirdVal: 0 },
        ])
        this._middleDataModel = new ObservableArray([
            { Year: 1200, Amount: 15, Impact: 1, Country: "", SecondVal: 0, ThirdVal: 0 },
            { Year: 1156, Amount: 13, Impact: 7, Country: "", SecondVal: 0, ThirdVal: 0 },
            { Year: 1000, Amount: 25, Impact: 10, Country: "", SecondVal: 0, ThirdVal: 0 },
            { Year: 900, Amount: 5, Impact: 3, Country: "", SecondVal: 0, ThirdVal: 0 },
            { Year: 700, Amount: 17, Impact: 4, Country: "", SecondVal: 0, ThirdVal: 0 },
            { Year: 600, Amount: 20, Impact: 1, Country: "", SecondVal: 0, ThirdVal: 0 },
        ])
        this._lowDataModel = new ObservableArray([
            { Year: 200, Amount: 15, Impact: 1, Country: "", SecondVal: 0, ThirdVal: 0 },
            { Year: 456, Amount: 13, Impact: 7, Country: "", SecondVal: 0, ThirdVal: 0 },
            { Year: 366, Amount: 25, Impact: 10, Country: "", SecondVal: 0, ThirdVal: 0 },
            { Year: 100, Amount: 5, Impact: 3, Country: "", SecondVal: 0, ThirdVal: 0 },
            { Year: 340, Amount: 17, Impact: 4, Country: "", SecondVal: 0, ThirdVal: 0 },
            { Year: 135, Amount: 20, Impact: 1, Country: "", SecondVal: 0, ThirdVal: 0 },
        ])
    }
}