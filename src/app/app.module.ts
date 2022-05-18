import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Header/Header.component';
import { CardComponent } from './Components/Card/Card.component';
import { CounterComponent } from './Components/Counter/Counter.component';
import { WishMessageComponent } from './Components/WishMessage/WishMessage.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    CounterComponent,
    WishMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
