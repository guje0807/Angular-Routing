import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../../products';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  selectedProduct:any;
  constructor(private route:ActivatedRoute){

  }

  ngOnInit(): void{
    let id=this.route.snapshot.paramMap.get('id')
    this.selectedProduct = products.find(i=>i.id===id);
  }

}
