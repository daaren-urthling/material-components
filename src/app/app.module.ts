import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TileGroupComponent } from './tile-group.component';
import { M4InputComponent } from './m4-input.component';
import { M4LayoutDirective } from './m4-layout.directive';
import { M4FlexDirective } from './m4-flex.directive';

@NgModule({
  declarations: [
    AppComponent,
    TileGroupComponent,
    M4InputComponent,
    M4LayoutDirective,
    M4FlexDirective
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
