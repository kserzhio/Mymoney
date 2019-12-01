import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, combineLatest,Subscription} from "rxjs";
import {BillService} from "../shared/services/bill.service";
import {Bill} from "../shared/models/bill.model";


@Component({
  selector: 'kss-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.scss']
})
export class BillPageComponent implements OnInit, OnDestroy {
  observable: any;
  observableTwo: any;
  currency: any;
  bill: Bill;
  isLoaded = false;
  constructor(private billService: BillService) { }

  ngOnInit() {
   this.observable = combineLatest(
        this.billService.getBill(),
        this.billService.getCurrency(),
    ).subscribe((data: [ Bill, any ]) => {
      this.bill = data[0];
      this.currency = data[1];
      this.isLoaded = true;
    });
  }
  onRefresh() {
    this.isLoaded = false;
    this.observableTwo =  this.billService.getCurrency().subscribe((currency: any) => {
      this.currency = currency;
      this.isLoaded = true;
    });
  }
  ngOnDestroy() {
    this.observable.unsubscribe();
    this.observableTwo.unsubscribe();
  }
}
