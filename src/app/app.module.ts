import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Header/Header.component';
import { CardComponent } from './Components/Card/Card.component';
import { CounterComponent } from './Components/Counter/Counter.component';
import { WishMessageComponent } from './Components/WishMessage/WishMessage.component';
import { ProductItemComponent } from './Components/ProductItem/ProductItem.component';
import { ShoppingCartComponent } from './Components/ShoppingCart/ShoppingCart.component';
import { OnChangeEventComponent } from './Components/OnChangeEvent/OnChangeEvent.component';
import { ToggleShowPasswordComponent } from './Components/ToggleShowPassword/ToggleShowPassword.component';
import { AmountRangeComponent } from './Components/AmountRange/AmountRange.component';
import { ThemeComponent } from './Components/Theme/Theme.component';
import { UserRegisterComponent } from './Components/UserRegister/UserRegister.component';
import { AuthUserComponent } from './Components/AuthUser/AuthUser.component';
import { GirlsComponent } from './Components/childAndFatherComponent/Girls/Girls.component';
import { GirlComponent } from './Components/childAndFatherComponent/Girl/Girl.component';
import { PipesComponent } from './Components/Pipes/Pipes.component';
import { UserItemComponent } from './Components/user/UserItem/UserItem.component';
import { UserListComponent } from './Components/user/UserList/UserList.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    CounterComponent,
    WishMessageComponent,
    ProductItemComponent,
    ShoppingCartComponent,
    OnChangeEventComponent,
    ToggleShowPasswordComponent,
    AmountRangeComponent,
    ThemeComponent,
    UserRegisterComponent,
    AuthUserComponent,
    GirlsComponent,
    GirlComponent,
    PipesComponent,
    UserItemComponent,
    UserListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
