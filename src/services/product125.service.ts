import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http"
import { Observable } from "rxjs/Observable";

@Injectable()
export class Product125Service {

    actionUrl: string = "https://realtouchnotification.firebaseio.com/data/1/125mm/0/vivo125";
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