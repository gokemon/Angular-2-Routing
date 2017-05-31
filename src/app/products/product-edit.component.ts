import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
/* imports Angular "core" library modules above and my stuff below */
import { MessageService } from '../messages/message.service';
import { IProduct } from './product';
import { ProductService } from './product.service';


/* 
    Michael's notes, some how I am missing the ID and data,
    looks like I should learn to write some tests so that each button has a test.
    and is properly wired to something
*/



/* TypeDecorator */
@Component({
    templateUrl: './app/products/product-edit.component.html',
    styleUrls: ['./app/products/product-edit.component.css']
})
/* Export class */
export class ProductEditComponent implements OnInit {
    pageTitle: string = 'Product Edit';
    errorMessage: string;

    product: IProduct;

    constructor(private productService: ProductService,
                private messageService: MessageService,
                private route: ActivatedRoute,
                private router: Router) { }

    ngOnInit(): void {
        // let id = +this.route.snapshot.params['id'];
        // this.getProduct(id);
        this.route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getProduct(id);
            }
        )
    } //ngOnInit                

    getProduct(id: number): void {
        this.productService.getProduct(id)
            .subscribe(
                (product: IProduct) => this.onProductRetrieved(product),
                (error: any) => this.errorMessage = <any>error
            );
    }

    onProductRetrieved(product: IProduct): void {
        this.product = product;

        if (this.product.id === 0) {
            this.pageTitle = 'Add Product';
        } else {
            this.pageTitle = `Edit Product: ${this.product.productName}`;
        }
    }

    deleteProduct(): void {
        if (this.product.id === 0) {
            // Don't delete, it was never saved.
            this.onSaveComplete();
       } else {
            if (confirm(`Really delete the product: ${this.product.productName}?`)) {
                this.productService.deleteProduct(this.product.id)
                    .subscribe(
                        () => this.onSaveComplete(`${this.product.productName} was deleted`),
                        (error: any) => this.errorMessage = <any>error
                    );
            }
        }
    }

    saveProduct(): void {
        if (true === true) {
            this.productService.saveProduct(this.product)
                .subscribe(
                    () => this.onSaveComplete(`${this.product.productName} was saved`),
                    (error: any) => this.errorMessage = <any>error
                );
        } else {
            this.errorMessage = 'Please correct the validation errors.';
        }
    }

    onSaveComplete(message?: string): void {
        if (message) {
            this.messageService.addMessage(message);
        }

        // navigate back to the product list
        this.router.navigate(['/products']);
    }
}
