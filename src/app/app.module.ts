import { CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { WelcomeComponent } from './welcome/welcome.component';
import { CountComponent } from './count/count.component';
import { CustomerComponent } from './customer/customer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselpictureComponent } from './carouselpicture/carouselpicture.component';
import { FooterHeadComponent } from './footer-head/footer-head.component';
import { AboutModule } from './about/about.module';
import { CoursesComponent } from './courses/courses.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        FooterComponent,
        WelcomeComponent,
        CountComponent,
        CustomerComponent,
        CarouselpictureComponent,
        FooterHeadComponent,
        CoursesComponent,
        ProjectsComponent,
        BlogComponent,
        ContactComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NzMenuModule,
        BrowserAnimationsModule,
        NzCarouselModule,
        FormsModule,
        CarouselModule,
        AboutModule,
        NgxSpinnerModule,
    ],
    
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
