import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BillService } from '../Services/bill.service';
import { OrderService } from '../Services/order.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css'],
})
export class BillComponent implements OnInit {
  result: any;
  selectedOrder: any;
  grossamount: any;
  gst: any;
  servicecharge: any;
  netamount: any;

  constructor(
    private bill: BillService,
    private router: Router,
    private route: ActivatedRoute,
    private order: OrderService
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    console.log(id);
    this.bill.getBill(id).subscribe((data) => {
      this.result = data;
      console.log(this.result);
    });
    this.order.getAllOrder().subscribe((data) => {
      this.result = data;
      for (let r of this.result) {
        if (r.id == id) {
          this.selectedOrder = r;
          //this.selectedItems = r.foods;
          this.grossamount = this.selectedOrder.price;
          this.gst = this.grossamount * 0.12;
          this.servicecharge = this.grossamount * 0.05;
          this.netamount = this.grossamount + this.gst + this.servicecharge;
          console.log(this.selectedOrder);
        }
      }
    });
  }

  //show bill
  showBill(id: any) {
    this.bill.getBill(id);
    //console.log(this.bill);
  }
}
