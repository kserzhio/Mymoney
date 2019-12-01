import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable, pipe} from "rxjs";
import {map} from "rxjs/operators";
@Injectable()
export class BaseApi {
    private baseUrl = 'http://localhost:3000/'
 constructor(public http:HttpClient)   {}
    private getUrl(url:string = ''):string{
        return this.baseUrl + url;
    }

    public post(url:string = '',data:any = {}):Observable<any>{
        return this.http.post(this.getUrl(url),data)
            .pipe(map((res: any) => res))
    }

    public get(url:string = ''):Observable<any>{
        return this.http.get(this.getUrl(url))
            .pipe(map((res: any) => res))
    }
    public put(url:string = '',data:any = {}):Observable<any>{
        return this.http.put(this.getUrl(url),data)
            .pipe(map((res: any) => res))
    }
}
