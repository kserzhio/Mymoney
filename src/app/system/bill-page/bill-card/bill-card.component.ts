import {Component, Input, OnInit} from '@angular/core';
import {Bill} from '../../shared/models/bill.model';

@Component({
  selector: 'kss-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss']
})
export class BillCardComponent implements OnInit {
  @Input() bill: Bill;
  @Input() currency: any;
  dollars: number;
  euro: number;
  constructor() { }

  ngOnInit() {
     for (let value in  this.currency){
        if(this.currency.hasOwnProperty(value)){
          if(this.currency[value]['ccy'] === 'USD'){
            this.dollars = this.bill.value / this.currency[value]['buy'];
          }
          if(this.currency[value]['ccy'] === 'EUR'){
            this.euro = this.bill.value / this.currency[value]['buy'];
          }
        }
     }

  }

}
