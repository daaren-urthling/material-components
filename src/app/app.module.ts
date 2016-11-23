import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TileGroupComponent } from './tile-group.component';
import { M4ControlContainerComponent, M4StrEditComponent, M4PercEditComponent, M4MoneyEditComponent, M4DateEditComponent } from './m4-control.component';
import { M4LayoutDirective } from './m4-layout.directive';
import { M4FlexDirective } from './m4-flex.directive';
import { M4TileMasterComponent } from './m4-tile-master.component';
import { M4TileSalesComponent } from './m4-tile-sales.component';


@NgModule({
  declarations: [
    AppComponent,
    TileGroupComponent,
    M4ControlContainerComponent,
    M4StrEditComponent,
    M4PercEditComponent,
    M4MoneyEditComponent,
    M4LayoutDirective,
    M4FlexDirective,
    M4DateEditComponent,
    M4TileMasterComponent,
    M4TileSalesComponent
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
