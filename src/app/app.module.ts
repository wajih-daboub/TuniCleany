import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { CreerUnCompteComponent } from './creer-un-compte/creer-un-compte.component';
import { SeConnecterComponent } from './se-connecter/se-connecter.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MinistereComponent } from './modules/ministere/ministere.component';
import { ContactUsComponent } from './contact-us/contact-us.component';



@NgModule({
  declarations: [
    AppComponent,
    CreerUnCompteComponent,
    SeConnecterComponent,
    AccueilComponent,
    MinistereComponent,
    ContactUsComponent,
    
  
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule
   
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
