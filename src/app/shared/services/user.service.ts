import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable, pipe} from "rxjs";
import {User} from "../models/user.model";
import { map } from "rxjs/operators";
@Injectable()
export class UserService {
    constructor(private http:HttpClient){}
    getUserByEmail(email:string):Observable<User>{
        return this.http.get(`http://localhost:3000/users?email=${email}`)
            .pipe(map((res: any) => res))
            .pipe(map((user:User[]) =>  user[0] ? user[0]: undefined))
    }
}
