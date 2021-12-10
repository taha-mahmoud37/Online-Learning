import { Component, HostListener, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
    title = 'learning';

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor(){

   
    }

    ngOnInit(): void {
        AOS.init();
    }

    @HostListener('window:scroll', ['$event'])

    onWindowScroll() {
        const element = document.querySelector('.navbar') as HTMLElement;
        const btnElm = document.querySelector('.btn-top') as HTMLElement;
        if (window.scrollY > element.clientHeight ) {
           
            element.classList.add('fixed-top', 'shadow');
            btnElm.classList.add('btn-show');
            
        } else {
            element.classList.remove('fixed-top', 'shadow');
            btnElm.classList.remove('btn-show');

            
        }
    }


    scrollTop() {
        window.scrollTo(0,0);
    }
}
