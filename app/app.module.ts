import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { Sub02Component } from './sub02.component';
import { Sub03Component } from './sub03.component';
import { Sub04Component } from './sub04.component';
import { Sub05Component } from './sub05.component';
import { Sub06Component } from './sub06.component';
import { Cycle01Component } from './cycle01.component';

import { ReplacePipe } from './custom01.component';
import { LimitToPipe } from './custom02.component';
import { FilterPipe } from './custom03.component';
import { SearchPipe } from './custom04.component';

import { AppRoutingModule } from './app.routing';

@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule
  ],
  declarations: [
      ReplacePipe,
      LimitToPipe,
      FilterPipe,
      SearchPipe,

      AppComponent,
      Sub02Component,
      Sub03Component,
      Sub04Component,
      Sub05Component,
      Sub06Component,
      Cycle01Component
  ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }
