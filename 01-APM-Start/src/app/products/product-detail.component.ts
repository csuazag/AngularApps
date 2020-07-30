import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  product: IProduct;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += ` ${id}`;
    this.product = {
      productId: id,
      productName: '',
      productCode: '',
      releaseDate: '',
      description: '',
      price: 0,
      starRating: 0,
      imageUrl: '',
    };
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
