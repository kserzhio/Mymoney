import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector:'kss-auth',
    templateUrl:'./auth.component.html'
})
export class AuthComponent implements OnInit{
    constructor(private router:Router){

    }
    ngOnInit(): void {
      this.router.navigate(['/login']);
    }
}
