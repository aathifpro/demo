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

const routes: Routes = [
  { path: 'home-screen', component: HomeScreenComponent },
  { path: 'navbar-tag', component: NavbarComponent },
  { path: 'header-tag', component: HeaderComponent },
  { path: 'service-tag', component: ServiceContainerComponent },
  { path: 'about-tag', component: AboutTagComponent },
  { path: 'catering-service-tag', component: CateringServiceTagComponent },
  { path: 'menu-tag', component: MenuTagComponent },
  { path: 'master-chef-tag', component: MasterChefTagComponent },
  { path: 'book-table-tag', component: BookTableTagComponent },
  { path: 'happy-customer-tag', component: HappyCustomerTagComponent },
  { path: 'recent-blog-tag', component: RecentBlogTagComponent },
  { path: 'footer', component: FooterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
