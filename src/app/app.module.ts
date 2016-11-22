import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';

import { MyDatePickerModule } from 'mydatepicker';

import { AppComponent } from './app.component';
import { TileGroupComponent } from './tile-group.component';
import { M4ControlComponent } from './m4-control.component';
import { M4LayoutDirective } from './m4-layout.directive';
import { M4FlexDirective } from './m4-flex.directive';
import { M4DateEditComponent } from './m4-date-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    TileGroupComponent,
    M4ControlComponent,
    M4LayoutDirective,
    M4FlexDirective,
    M4DateEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    MyDatePickerModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
