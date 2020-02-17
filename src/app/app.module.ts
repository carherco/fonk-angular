import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FonkAloneComponent } from './pages/fonk-alone/fonk-alone.component';
import { MenuComponent } from './layout/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { FonkIntegratedValidatorsComponent } from './pages/fonk-integrated-validators/fonk-integrated-validators.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FonkAloneComponent,
    FonkIntegratedValidatorsComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
