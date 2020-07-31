import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from 'src/app/products/product-list.component';
import { ProductDetailGuard } from 'src/app/products/product-detail.guard';
import { ProductDetailComponent } from 'src/app/products/product-detail.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      {
        path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent,
      },
    ]),
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
