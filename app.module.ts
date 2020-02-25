import {BrowserModule} from '@angular/platform-browser';
import {NgModule}      from '@angular/core';
import {AppComponent}  from './app.component';
import {RemoveSpaces} from './remove-space';


@NgModule({
  imports: [     
        BrowserModule
  ],
  declarations: [
        AppComponent, RemoveSpaces  
  ],
  bootstrap: [
        AppComponent
  ]
})
export class AppModule { }
