import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './service/auth.guard';

import { HomeScreenComponent } from './screen/home-screen/home-screen.component';
import { AboutScreenComponent } from './screen/about-screen/about-screen.component'; 
import { ServiceScreenComponent } from './screen/service-screen/service-screen.component';
import { ContactScreenComponent } from './screen/contact-screen/contact-screen.component';
import { BlogScreenComponent } from './screen/blog-screen/blog-screen.component';
import { ReservationScreenComponent } from './screen/reservation-screen/reservation-screen.component';
import { LoginScreenComponent } from './screen/login-screen/login-screen.component';
import { MenuScreenComponent } from './screen/menu-screen/menu-screen.component';
import { ProfileScreenComponent } from './screen/profile-screen/profile-screen.component';
import { PaymentScreenComponent } from './screen/payment-screen/payment-screen.component';
import { SingleProductScreenComponent } from './screen/single-product-screen/single-product-screen.component';
import { OrderListScreenComponent } from './screen/order-list-screen/order-list-screen.component';
import { CartScreenComponent } from './screen/cart-screen/cart-screen.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeScreenComponent, canActivate: [authGuard] },
  { path: 'about', component: AboutScreenComponent },
  { path: 'service', component: ServiceScreenComponent },
  { path: 'contact', component: ContactScreenComponent },
  { path: 'blog', component: BlogScreenComponent },
  { path: 'reservation', component: ReservationScreenComponent },
  { path: 'login', component: LoginScreenComponent, canActivate: [authGuard] },
  { path: 'menu', component: MenuScreenComponent },
  { path: 'profile', component: ProfileScreenComponent },
  { path: 'payment', component: PaymentScreenComponent },
  { path: 'single-product', component: SingleProductScreenComponent },
  { path: 'order-list', component: OrderListScreenComponent },
  { path: 'cart', component: CartScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
