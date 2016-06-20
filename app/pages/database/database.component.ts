import {Component, ViewChild, ElementRef, EventEmitter} from "@angular/core";
import {Page} from "ui/page";
import dialogs = require("ui/dialogs");

//USING PLUGIN: NATIVESCRIPT-SQLITE
var Sqlite = require( "nativescript-sqlite" );

@Component({
    selector: "DatabasePage",
    templateUrl: 'pages/database/database.html',
    styleUrls: ['pages/database/database.css']
})
export class DatabasePage {

    private db;
    private results;
    private info: string;
    private name: string;
    private age: string;
    private nameEmitter = new EventEmitter<string>();
    private ageEmitter = new EventEmitter<string>();

    public constructor(private page: Page){
        let instance= this;
        var db_promise = new Sqlite("MyDB", (err, db)=>{
            if (err) { 
            console.error("We failed to open database", err);
            instance.info = "We failed to open database: " + err;
            } else {
            instance.db = db;
            }
        });
        this.setupDB()
    }

    ngOnInit() {
        let instance = this;
        this.nameEmitter
            .subscribe(v=>{
                instance.name = v;
            });
        this.ageEmitter
            .subscribe(v=>{
                instance.age = v;
            });
    }

    public insert(){
        let instance = this;
        //CHECK IF ITS OPEN
        if(this.db.isOpen()){
            this.db.execSQL("INSERT INTO tests (name, age) VALUES (?,?)", [this.name, this.age], (err, id)=>{
                console.log("The new record id is:", id);
                instance.info = "Row added";
                });
        } else {
            console.log("DB is closed!");
            instance.info = "DB is closed!";
        }
    }

    public getAll(){
        let instance = this;
        //CHECK IF ITS OPEN
        if(this.db.isOpen()){
            this.db.all('SELECT * FROM tests', (err, r)=>{
                console.log("Row of data was: ", r);  // Prints [["Field1", "Field2",...]]
                instance.info = "Data received";
                this.results = r;
            });
        } else {
            console.log("DB is closed!");
            instance.info = "DB is closed!";
        }
    }

    public deleteAll(){
        let instance= this;
        //CHECK IF ITS OPEN
        if(this.db.isOpen()){
            this.db.execSQL("DELETE FROM tests", (err)=>{
                if(err){
                    console.log("There was an error:", err)
                    instance.info = "There was an error: " + err;
                } else {
                    console.log("Data has been deleted")
                    instance.info = "Data has been deleted";
                }
            });
        } else {
            console.log("DB is closed!");
            instance.info = "DB is closed!";
        }
    }

    public closeDB(){
        let instance = this;
        //CHECK IF IT EXISTS AND IF ITS OPEN
        if(Sqlite.exists("MyDB")){
            if(this.db.isOpen()){
                this.db.close((err)=>{
                    if(err){
                        console.log("We failed to close database");
                    } else {
                        console.log("DB closed");
                        instance.info = "DB closed";
                    }
                })
            } else {
                console.log("DB is already closed!");
                instance.info = "DB is already closed!";
            }
            
        } else {
            console.log("DB doesn't exist");
            instance.info = "DB doesn't exist";
        }
    }

    public openDB(){
        let instance= this;
        //CHECK IF IT EXISTS AND IF ITS OPEN
        if(Sqlite.exists("MyDB")){
            if(instance.db.isOpen()){
                console.log("DB is already open!");
                instance.info = "DB is already open!";
            } else {
                var db_promise = new Sqlite("MyDB", false, (err, db)=>{
                    if (err) { 
                    console.error("We failed to open database", err);
                    instance.info = "We failed to open database " + err;
                    } else {
                    console.log("Are we open yet (Inside Callback)? ", db.isOpen() ? "Yes" : "No"); // Yes
                    instance.info = "DB opened";
                    instance.db = db;
                    }
                });
            }
            
        } else {
            console.log("DB doesn't exist");
            instance.info = "DB doesn't exist!";
        }
    }

    public setupDB() {
    this.db.resultType(Sqlite.RESULTSASOBJECT);
    this.db.execSQL('DROP TABLE IF EXISTS tests;', (err)=>{
        if (err) { console.log("!---- Drop Err", err); }
        this.db.execSQL('CREATE TABLE tests (`name` TEXT, `age` NUMERIC)', (err)=>{
            if (err) {
                console.log("!---- Create Table err", err);
                return;
            }
            this.db.execSQL('INSERT INTO tests (name, age) VALUES ("Nathan Drake",32)', (err, id)=>{
                if (err) {
                    console.log("!---- Insert err", err);
                    return;
                }
               this. db.execSQL('INSERT INTO tests (name, age) VALUES ("Elena Fisher",30)');
            });
        });
    });
    this.db.close()
}
}