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
  // { path: 'home', component: HomeScreenComponent },
  { path: 'about', component: AboutScreenComponent, canActivate: [authGuard]  },
  { path: 'service', component: ServiceScreenComponent, canActivate: [authGuard] },
  { path: 'contact', component: ContactScreenComponent, canActivate: [authGuard] },
  { path: 'blog', component: BlogScreenComponent, canActivate: [authGuard] },
  { path: 'reservation', component: ReservationScreenComponent, canActivate: [authGuard] },
  // { path: 'login', component: LoginScreenComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginScreenComponent },
  { path: 'menu', component: MenuScreenComponent, canActivate: [authGuard] },
  { path: 'profile', component: ProfileScreenComponent, canActivate: [authGuard] },
  { path: 'payment', component: PaymentScreenComponent, canActivate: [authGuard] },
  { path: 'single-product', component: SingleProductScreenComponent, canActivate: [authGuard] },
  { path: 'order-list', component: OrderListScreenComponent, canActivate: [authGuard] },
  { path: 'cart', component: CartScreenComponent, canActivate: [authGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
