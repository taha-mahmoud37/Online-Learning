import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
    {path: '', redirectTo:'home', pathMatch: 'full'},
    {path:'home', component:HomeComponent},
    {path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)},
    {path: 'courses', component: CoursesComponent},    
    {path: 'projects', component: ProjectsComponent},    
    {path: 'blog', component: BlogComponent},    
    {path: 'contact', component: ContactComponent}  
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
