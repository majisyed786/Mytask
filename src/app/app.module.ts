import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { Router, RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AdditemsComponent } from './additems/additems.component';
@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    HomeComponent,
    AdditemsComponent,
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
