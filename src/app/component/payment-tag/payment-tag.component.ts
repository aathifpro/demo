import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-tag',
  templateUrl: './payment-tag.component.html',
  styleUrls: ['./payment-tag.component.css']
})
export class PaymentTagComponent implements OnInit {

  ngOnInit(): void {
    
  }

  paymentList: { name: string; visible: boolean }[] = [
    { name: 'cashPayment', visible: false },
    { name: 'cardPayment', visible: false },
  ];

  // Method to update payment visibility
  visiblePayment(selectedPayment: string): void {
    // Set the visibility of the selected payment to true
    this.paymentList.forEach(payment => {
      if(payment.name === selectedPayment) {
        payment.visible = !payment.visible;
      }
    });
  }

}
