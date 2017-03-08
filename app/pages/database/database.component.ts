import {Component, EventEmitter, OnInit} from '@angular/core';
import colorModule = require('color');
import platform = require('platform');

//USING PLUGIN: NATIVESCRIPT-SQLITE
var Sqlite = require('nativescript-sqlite');

@Component({
    moduleId: module.id,
    selector: 'sc-database-page',
    templateUrl: 'database.html',
    styleUrls: ['database.css']
})
export class DatabasePage implements OnInit {

    private db;
    private results;
    private info: string;
    private name: string;
    private age: string;
    private nameEmitter = new EventEmitter<string>();
    private ageEmitter = new EventEmitter<string>();
    private isAndroid: boolean = platform.isAndroid;

    constructor() {
        let instance = this;
        //Create the database (DB)
        console.log('creating database...');
        let db_promise = new Sqlite('MyDB', (err, db) => {
            if (err) {
                console.error('We failed to open database', err);
                instance.info = 'We failed to open database: ' + err;
            } else {
                instance.db = db;
            }
        });
        this.setupDB();
    }

    ngOnInit() {
        let instance = this;
        // this.nameEmitter
        //     .subscribe(v => {
        //         instance.name = v;
        //     });
        // this.ageEmitter
        //     .subscribe(v => {
        //         instance.age = v;
        //     });
    }
    // Inserts a new row executing SQL
    public insert() {
        console.log('name', this.name, 'age', this.age);
        let instance = this;
        //CHECK IF ITS OPEN
        if (this.db.isOpen()) {
            /* To execute non-SELECT SQL statements  */
            this.db.execSQL('INSERT INTO tests (name, age) VALUES (?,?)', [this.name, this.age], (err, id) => {
                console.log('The new record id is:', id);
                instance.info = 'Row added: ' + id;
            });
        } else {
            console.log('DB is closed!');
            instance.info = 'DB is closed!';
        }
    }
    //Gets all the rows
    public getAll() {
        let instance = this;
        //CHECK IF ITS OPEN
        if (this.db.isOpen()) {
            /* To execute SELECT SQL statements:
                    .get returns the first row as result in the callback
                    .all returns all the rows as result in the callback
                    .each returns each row as result in the callback (which is called as many times as the number of rows) */
            this.db.all('SELECT * FROM tests', (err, r) => {
                console.log('Row of data was: ', r);
                instance.info = 'Data received';
                this.results = r;
            });
        } else {
            console.log('DB is closed!');
            instance.info = 'DB is closed!';
        }
    }
    //Deletes tests rows
    public deleteAll() {
        let instance = this;
        //CHECK IF ITS OPEN
        if (this.db.isOpen()) {
            this.db.execSQL('DELETE FROM tests', (err) => {
                if (err) {
                    console.log('There was an error:', err);
                    instance.info = 'There was an error: ' + err;
                } else {
                    console.log('Data has been deleted');
                    instance.info = 'Data has been deleted';
                }
            });
        } else {
            console.log('DB is closed!');
            instance.info = 'DB is closed!';
        }
    }
    //To close DB
    public closeDB() {
        let instance = this;
        //CHECK IF IT EXISTS AND IF ITS OPEN
        if (Sqlite.exists('MyDB')) {
            if (this.db.isOpen()) {
                this.db.close((err) => {
                    if (err) {
                        console.log('We failed to close database');
                    } else {
                        console.log('DB closed');
                        instance.info = 'DB closed';
                    }
                });
            } else {
                console.log('DB is already closed!');
                instance.info = 'DB is already closed!';
            }

        } else {
            console.log('DB doesn\'t exist');
            instance.info = 'DB doesn\'t exist';
        }
    }
    //To open DB
    public openDB() {
        let instance = this;
        //CHECK IF IT EXISTS AND IF ITS OPEN
        if (Sqlite.exists('MyDB')) {
            if (instance.db.isOpen()) {
                console.log('DB is already open!');
                instance.info = 'DB is already open!';
            } else {
                var db_promise = new Sqlite('MyDB', false, (err, db) => {
                    if (err) {
                        console.error('We failed to open database', err);
                        instance.info = 'We failed to open database ' + err;
                    } else {
                        console.log('Are we open yet (Inside Callback)? ', db.isOpen() ? 'Yes' : 'No'); // Yes
                        instance.info = 'DB opened';
                        instance.db = db;
                    }
                });
            }

        } else {
            console.log('DB doesn\'t exist');
            instance.info = 'DB doesn\'t exist!';
        }
    }
    //Initial DB set up
    public setupDB() {
        this.db.resultType(Sqlite.RESULTSASOBJECT);
        this.db.execSQL('DROP TABLE IF EXISTS tests;', (err) => {
            if (err) { console.log('!---- Drop Err', err); }
            this.db.execSQL('CREATE TABLE tests (`name` TEXT, `age` NUMERIC)', (err) => {
                if (err) {
                    console.log('!---- Create Table err', err);
                    return;
                }
                this.db.execSQL('INSERT INTO tests (name, age) VALUES ("Nathan Drake",32)', (err, id) => {
                    if (err) {
                        console.log('!---- Insert err', err);
                        return;
                    }
                    this.db.execSQL('INSERT INTO tests (name, age) VALUES ("Elena Fisher",30)');
                });
            });
        });
        this.db.close();
    }

    public changeCellBackground(args) {
        if (!this.isAndroid) {
            var cell = args.ios; //return UITableViewCell
            cell.backgroundColor = new colorModule.Color('0,0,0,0').ios;
        }
    }
}
