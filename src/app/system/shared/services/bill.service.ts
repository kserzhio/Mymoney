import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Bill} from "../models/bill.model";
import {map} from "rxjs/operators";

@Injectable()
export class BillService {
    constructor(private http:HttpClient){}
    getBill():Observable<Bill>{
        return this.http.get('http://localhost:3000/bill')
            .pipe(map((res: any) => res))
    }
    getCurrency(base:string = 'EUR'):Observable<any>{
        return this.http.get(`http://data.fixer.io/api/latest?access_key=beedeb5a52101f6ba80959a6e3e4e1aa&base=${base}`)
            .pipe(map((res: any) => res))
    }
}
