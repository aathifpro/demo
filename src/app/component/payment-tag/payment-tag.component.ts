import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-payment-tag',
  templateUrl: './payment-tag.component.html',
  styleUrls: ['./payment-tag.component.css']
})
export class PaymentTagComponent implements OnInit {

  selectedProduct: any;
  quantity: any = 1;
  totalCost: number = 0;
  cartRouteName: any = ''

  public currentRouteName: any = ''

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit(): void { 
    this.getCurrentRouteName();
    this.route.queryParams.subscribe(params => {
      const productId = params['productId'];
      this.quantity = params['productQuantity']
      this.totalCost = params['totalCost']
      this.cartRouteName = params['routeName']
      this.getProductDetails(productId);
    })
  }

  getProductDetails(productId: any) {
    console.log("getProductDetails -> started")
    this.productService.getProductById(productId)
      .subscribe({
        next: (data) => {
          this.selectedProduct = data;
          this.selectedProduct.quantity = this.quantity;
          this.selectedProduct.total = this.selectedProduct.quantity * this.selectedProduct.price;
          console.log(data);
          console.log("hello retrieve");
        },
        error: (e) => {
          console.error(e)
          console.error("hello error")
        }
      })
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

  getCurrentRouteName() {
    this.currentRouteName = this.route.snapshot.routeConfig?.path;
    console.log("current Router name : ", this.currentRouteName)
  }

}
