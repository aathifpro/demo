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
import { AboutScreenComponent } from './screen/about-screen/about-screen.component';
import { HttpClientModule } from '@angular/common/http';
import { ExperienceTagComponent } from './component/experience-tag/experience-tag.component';
import { CommonHeaderComponent } from './component/common-header/common-header.component';
import { ServiceScreenComponent } from './screen/service-screen/service-screen.component';
import { ContactScreenComponent } from './screen/contact-screen/contact-screen.component';
import { ContactFormTagComponent } from './component/contact-form-tag/contact-form-tag.component';
import { ContactInfoTagComponent } from './component/contact-info-tag/contact-info-tag.component';
import { BlogScreenComponent } from './screen/blog-screen/blog-screen.component';
import { ReservationScreenComponent } from './screen/reservation-screen/reservation-screen.component';
import { MapTagComponent } from './component/map-tag/map-tag.component';
import { LoginScreenComponent } from './screen/login-screen/login-screen.component';
import { MenuScreenComponent } from './screen/menu-screen/menu-screen.component';

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
    FooterComponent,
    AboutScreenComponent,
    ExperienceTagComponent,
    CommonHeaderComponent,
    ServiceScreenComponent,
    ContactScreenComponent,
    ContactFormTagComponent,
    ContactInfoTagComponent,
    BlogScreenComponent,
    ReservationScreenComponent,
    MapTagComponent,
    LoginScreenComponent,
    MenuScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
