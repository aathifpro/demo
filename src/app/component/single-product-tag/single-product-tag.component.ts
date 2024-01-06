import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { Products } from 'src/app/models/products.model';

@Component({
  selector: 'app-single-product-tag',
  templateUrl: './single-product-tag.component.html',
  styleUrls: ['./single-product-tag.component.css']
})
export class SingleProductTagComponent implements OnInit {

  selectedProduct: any;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    console.log("ngOnInit -> started")
    // this.selectedProduct = this.productService.getSelectedProduct();
    this.route.queryParams.subscribe(params => {
      const productId = params['productId']
      this.getProductDetails(productId);
    })
  }
  

  getProductDetails(productId: any) {
    console.log("getProductDetails -> started")
    this.productService.getProductById(productId)
      .subscribe({
        next: (data) => {
          this.selectedProduct = data;
          console.log(data);
          console.log("hello retrieve");
        },
        error: (e) => {
          console.error(e)
          console.error("hello error")
        }
      })
  }

  navigateToDestination(id: any) {
    this.router.navigate(['/payment'], {queryParams: {productId: id, productQuantity: this.selectedProduct.quantity}})
  }

  onQuantityChange() {
    this.selectedProduct.quantity
    this.selectedProduct.total = this.selectedProduct.quantity * this.selectedProduct.price
  }


  addToCart(product: Products): void {
    this.cartService.addToCrat(product);
  }

}
