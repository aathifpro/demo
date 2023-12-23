import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    NavbarComponent,
    HeaderComponent,
    ServiceContainerComponent,
    AboutTagComponent,
    CateringServiceTagComponent,
    MenuTagComponent,
    MasterChefTagComponent,
    BookTableTagComponent,
    HappyCustomerTagComponent,
    RecentBlogTagComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
