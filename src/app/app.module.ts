import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { CreatemetroComponent } from './components/metro/createmetro/createmetro.component';
import { SearchmetroComponent } from './components/metro/searchmetro/searchmetro.component';
import { GetallmetroComponent } from './components/metro/getallmetro/getallmetro.component';
import { UpdatemetroComponent } from './components/metro/updatemetro/updatemetro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CreatemetroComponent,
    SearchmetroComponent,
    GetallmetroComponent,
    UpdatemetroComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
