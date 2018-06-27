import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http"
import { Observable } from "rxjs/Observable";

@Injectable()
export class ProductService {

    actionUrl: string = "https://realtouchnotification.firebaseio.com/data/0/1mm";
    constructor(public http: Http) {

    }

    fetchProduct(i: number, type: string): Observable<any> {
        return this.http.get(`${this.actionUrl}/${i}/${type}.json`)
            .map((res: Response) => {
                
                return res.json();
            })
            .catch((error: any) => Observable.throw(error || 'server error'));
    }
}