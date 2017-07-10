import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { Router } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule} from './app.routing.module';
import { ProductsModule } from './products/products.module';
import {CartModule} from './cart/cart.module';
import { AdminModule } from './admin/admin.module';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/.';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    JsonpModule,
    ProductsModule,
    CartModule ,
    AdminModule
    ],
  providers: [
    AuthGuard,
    AuthService
  ],
  bootstrap: [
    AppComponent
    ]
})
export class AppModule { 
  constructor(router:Router){
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
