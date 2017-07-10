import { Component} from '@angular/core';
import {CartItem} from './entities/cartitem';
import {Observable} from 'rxjs';
import {CartService} from './cart/.'
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  public shoppingCartItems$: Observable<CartItem[]>;
  public isActivated: boolean;
  title = 'MyShop';

  constructor(private cartService: CartService,
    private authService: AuthService,){
    this.shoppingCartItems$ = this
      .cartService
      .getItems();

      this.isActivated =  this.authService.isLoggedIn;

    this.shoppingCartItems$.subscribe(_ => _);
  }
}
