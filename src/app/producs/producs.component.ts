import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { products } from '../products';

@Component({
  selector: 'app-producs',
  standalone: true,
  imports: [NgFor,RouterModule],
  templateUrl: './producs.component.html',
  styleUrl: './producs.component.css'
})
export class ProducsComponent {

  Products = products;

}
