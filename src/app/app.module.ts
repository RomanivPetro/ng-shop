import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductsService} from './products.service';
import { ProductListComponent } from './product-list/product-list.component';
import { BacketComponent } from './backet/backet.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    BacketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    RouterModule.forRoot([
    {
      path: '',
      redirectTo: '/products',
      pathMatch: 'full'
    },
    {
      path:'products',
      component:ProductListComponent
    }
])],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
