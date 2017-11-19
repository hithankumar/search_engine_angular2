 import {Component,OnInit} from '@angular/core';
import {IProduct} from './product';
import {ActivatedRoute, Router} from '@angular/router';
 
 @Component({
     templateUrl: 'app/product/product-detail.component.html'
 })
 export class ProductDetailComponent implements OnInit{
    constructor(private route: ActivatedRoute,
                private router: Router){ //injects activatedRoute into this component.
        console.log(this.route.snapshot.params['id']); //to access the param from url
    }
    pageTitle: string ="First";
    product: IProduct;
    ngOnInit(): void{
        let id = +this.route.snapshot.params['id'];
        this.pageTitle += `:${id}`;
    }

    onBack():void{
        this.router.navigate(['/products']);
    }
 }
