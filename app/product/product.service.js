"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
        this.productUrl = 'api/products/products.json';
    } //to inject the http service.
    ProductService.prototype.getProducts = function () {
        //we need an array of products. so we transform the response returned to an array of products.
        return this.http.get(this.productUrl)
            .map(function (response) { return response.json(); }) //using casting operator.
            .do(function (data) { return console.log('All:' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    ProductService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || "server erorr");
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable() //used when a service is created.
    ,
    __metadata("design:paramtypes", [http_1.Http])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map