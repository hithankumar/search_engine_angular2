import { Injectable } from '@angular/core';
import { IProduct } from './product';
import {Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable() //used when a service is created.
export class ProductService{
    private productUrl = 'api/products/products.json';
    constructor(private http:Http){} //to inject the http service.
    getProducts(): Observable<IProduct[]> {
        //we need an array of products. so we transform the response returned to an array of products.
       return this.http.get(this.productUrl)
                    .map((response: Response) =><IProduct[]>response.json()) //using casting operator.
                    .do(data => console.log('All:' + JSON.stringify(data)))
                    .catch(this.handleError)
    } 

    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || "server erorr");
    }
}