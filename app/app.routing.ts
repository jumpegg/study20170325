import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {Sub02Component} from './sub02.component';
import {Sub03Component} from './sub03.component';
import {Sub04Component} from './sub04.component';
import {Sub05Component} from './sub05.component';
import {Sub06Component} from './sub06.component';
import {Cycle01Component} from './cycle01.component';

const routes: Routes = [
    {path: '', redirectTo: '/index', pathMatch: 'full'},
    {path: 'index', component: AppComponent},
    {path: 'sub02', component: Sub02Component},
    {path: 'sub03', component: Sub03Component},
    {path: 'sub04', component: Sub04Component},
    {path: 'sub05', component: Sub05Component},
    {path: 'sub06', component: Sub06Component},
    {path: 'cycle01', component: Cycle01Component},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
