import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
/* imports Angular "core" library modules above and my stuff below */
import { IProduct } from './product';
import { ProductService } from './product.service';


/* TypeDecorator */
@Component({
    templateUrl: './app/products/product-detail.component.html'
})
/* Export class */
export class ProductDetailComponent implements OnInit {
    pageTitle: string = 'Product Detail';
    product: IProduct;
    errorMessage: string;

    constructor(private productService: ProductService,
                private route: ActivatedRoute) { }

    ngOnInit(): void {
        let id = +this.route.snapshot.params['id'];
        this.getProduct(id);
    } //ngOnInit

    getProduct(id: number) {
        this.productService.getProduct(id).subscribe(
            product => this.product = product,
            error => this.errorMessage = <any>error);
    } // getProduct(id)
} // ProductDetailComponent
