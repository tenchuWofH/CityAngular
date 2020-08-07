import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CityService } from './services/city.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CityNavigationBarComponent } from './components/home/city-navigation-bar.component'
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CityListComponent } from './components/city/city-list.component';
import { CityEditComponent } from './components/city/city-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CityNavigationBarComponent,
    CityListComponent,
    CityEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [CityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
