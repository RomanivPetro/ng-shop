import { Component, Input } from '@angular/core';
import {Product} from 'app/entities/product';

@Component({
  selector: 'backet-list',
  templateUrl: './backet.component.html',
  styleUrls: ['./backet.component.css']
})
export class BacketComponent {

@Input() products:Product[]; 

}
