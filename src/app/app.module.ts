import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TileGroupComponent } from './tile-group.component';
import { M4StaticComponent } from './m4-static.component';
import { M4InputComponent } from './m4-input.component';

@NgModule({
  declarations: [
    AppComponent,
    TileGroupComponent,
    M4StaticComponent,
    M4InputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
