import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
/* imports Angular "core" library modules above and my stuff below */
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit.component';

import { ProductFilterPipe } from './product-filter.pipe';
import { ProductService } from './product.service';
import { SharedModule } from '../shared/shared.module';


/* TypeDecorator */
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
       { path: 'products', component: ProductListComponent }
    ])
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductFilterPipe
  ],
  providers: [
    ProductService
  ]
})
/* Export class */
export class ProductModule {
  // code stub
}
