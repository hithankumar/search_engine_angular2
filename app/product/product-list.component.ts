import { Component, OnInit } from '@angular/core';
import { IProduct } from './product'; //interface
import { ProductService } from './product.service';

@Component({
    //selector: 'product-list', //to use if we are nesting this component inside something else.
    moduleId: module.id, // for relative path
    templateUrl: 'product-list.component.html', //path is relative to index.html
    styleUrls: ['product-list.component.css']

})
export class ProductListComponent implements OnInit {
    pageTitle: string ="Product List";
    imageWidth: number = 30;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage : string;
    products: IProduct[];

    constructor(private _productService: ProductService){

    }
    toggleImage(): void{
        this.showImage = !this.showImage;
    };
    ngOnInit(): void{
        this._productService.getProducts()
                            .subscribe(products => this.products=products,
                                        error => this.errorMessage = <any>error);
    };
    onRatingClicked(message: string): void{
        this.pageTitle = 'Product List : ' + message;
    }
        
}