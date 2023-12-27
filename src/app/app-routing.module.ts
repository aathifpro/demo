import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './screen/home-screen/home-screen.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HeaderComponent } from './component/header/header.component';
import { ServiceContainerComponent } from './component/service-container/service-container.component';
import { AboutTagComponent } from './component/about-tag/about-tag.component';
import { CateringServiceTagComponent } from './component/catering-service-tag/catering-service-tag.component';
import { MenuTagComponent } from './component/menu-tag/menu-tag.component';
import { MasterChefTagComponent } from './component/master-chef-tag/master-chef-tag.component';
import { BookTableTagComponent } from './component/book-table-tag/book-table-tag.component';
import { HappyCustomerTagComponent } from './component/happy-customer-tag/happy-customer-tag.component';
import { RecentBlogTagComponent } from './component/recent-blog-tag/recent-blog-tag.component';
import { FooterComponent } from './component/footer/footer.component';
import { AboutScreenComponent } from './screen/about-screen/about-screen.component'; 
import { ServiceScreenComponent } from './screen/service-screen/service-screen.component';
import { ContactScreenComponent } from './screen/contact-screen/contact-screen.component';
import { BlogScreenComponent } from './screen/blog-screen/blog-screen.component';
import { ReservationScreenComponent } from './screen/reservation-screen/reservation-screen.component';
import { LoginScreenComponent } from './screen/login-screen/login-screen.component';
import { MenuScreenComponent } from './screen/menu-screen/menu-screen.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeScreenComponent },
  // { path: 'navbar-tag', component: NavbarComponent },
  // { path: 'header-tag', component: HeaderComponent },
  // { path: 'service-tag', component: ServiceContainerComponent },
  // { path: 'about-tag', component: AboutTagComponent },
  // { path: 'catering-service-tag', component: CateringServiceTagComponent },
  // { path: 'menu-tag', component: MenuTagComponent },
  // { path: 'master-chef-tag', component: MasterChefTagComponent },
  // { path: 'book-table-tag', component: BookTableTagComponent },
  // { path: 'happy-customer-tag', component: HappyCustomerTagComponent },
  // { path: 'recent-blog-tag', component: RecentBlogTagComponent },
  // { path: 'footer', component: FooterComponent },
  { path: 'about', component: AboutScreenComponent },
  { path: 'service', component: ServiceScreenComponent },
  { path: 'contact', component: ContactScreenComponent },
  { path: 'blog', component: BlogScreenComponent },
  { path: 'reservation', component: ReservationScreenComponent },
  { path: 'login', component: LoginScreenComponent },
  { path: 'menu', component: MenuScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
