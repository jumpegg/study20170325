import {Component, OnChanges, DoCheck, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy} from '@angular/core';

@Component({
  templateUrl: './app/cycle01.component.html',
  styleUrls:["./assets/stylesheets/book.css"]
})
export class Cycle01Component implements OnChanges, DoCheck, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
    isShow: boolean = false;
    test: string = "test";

    shouldShow = true;
    toggle() { this.shouldShow = !this.shouldShow;}

    constructor(){
        console.log("1 - constructor()");
    }
    ngOnChanges(){
        console.log("2 - ngOnChanges()");
    }
    ngOnInit(){
        console.log("3 - ngOnInit()");
    }
    ngDoCheck(){
        console.log("4 - ngDoCheck()");
    }
    ngAfterContentInit(){
        console.log("5 - ngAfterContentInit()");
    }
    ngAfterContentChecked(){
        console.log("6 - ngAfterContentChecked()");
    }
    ngAfterViewInit(){
        console.log("7 - ngAfterViewInit()");
    }
    ngAfterViewChecked(){
        console.log("8 - ngAfterViewChecked()");
        console.log("#########################");
    }
    ngOnDestroy(){
        console.log("9 - ngOnDestroy()");
    }

}
