import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, combineLatest,Subscription} from "rxjs";
import {BillService} from "../shared/services/bill.service";
import {Bill} from "../shared/models/bill.model";


@Component({
  selector: 'kss-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.scss']
})
export class BillPageComponent implements OnInit{
  observable: any;
  constructor(private billService:BillService) { }

  ngOnInit() {
   this.observable = combineLatest(
        this.billService.getBill(),
        this.billService.getCurrency(),
    ).subscribe((data:[Bill,any]) => {
      console.log(data);
    })
  }
}
