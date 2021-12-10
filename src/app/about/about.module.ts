/* eslint-disable linebreak-style */
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurTeacherComponent } from './our-teacher/our-teacher.component';
import { PricingComponent } from './pricing/pricing.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
    declarations: [
        AboutUsComponent,
        OurTeacherComponent,
        PricingComponent,
        
    ],
    imports: [
        CommonModule,
        AboutRoutingModule,
        CarouselModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],

    
})
export class AboutModule { }
