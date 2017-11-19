import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';

@Injectable()
export class ProductGuardService implements CanActivate {
    //to use router it must be injected into the constructor
    constructor(private router: Router){}

    canActivate(route: ActivatedRouteSnapshot): boolean{
        let id = +route.url[1].path;
        if(isNaN(id) || id<1){
            alert("Invalid id");
            this.router.navigate(['/products']);
            return false;
        }
        return true;
    }
}