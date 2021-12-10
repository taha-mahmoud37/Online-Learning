/* eslint-disable linebreak-style */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutUsComponent} from './about-us/about-us.component';
import { OurTeacherComponent } from './our-teacher/our-teacher.component';
import { PricingComponent } from './pricing/pricing.component';
const routes: Routes = [
    {path: '', component:AboutUsComponent},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'teacher', component: OurTeacherComponent},
    {path: 'pricing', component: PricingComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
// eslint-disable-next-line linebreak-style
export class AboutRoutingModule { }
