import {Component, OnChanges, DoCheck, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy} from '@angular/core';

@Component({
  selector: 'my-book',
  templateUrl: './app/book.component.html',
  styleUrls:["./assets/stylesheets/book.css"]
})
export class BookComponent implements OnChanges, DoCheck, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

    constructor(){
        console.log("constructor()");
    }
    ngOnChanges(){
        console.log("ngOnChanges()");
    }
    ngOnInit(){
        console.log("ngOnInit()");
    }
    ngDoCheck(){
        console.log("ngDoCheck()");
    }
    ngAfterContentInit(){
        console.log("ngAfterContentInit()");
    }
    ngAfterContentChecked(){
        console.log("ngAfterContentChecked()");
    }
    ngAfterViewInit(){
        console.log("ngAfterViewInit()");
    }
    ngAfterViewChecked(){
        console.log("ngAfterViewChecked()");
    }
    ngOnDestroy(){
        console.log("ngOnDestroy()");
    }

}
