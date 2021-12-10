/* eslint-disable linebreak-style */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

    allLinks = Array.from(document.querySelectorAll('li a'));
    

    
   
    constructor(private _Router:Router) { 
        
    }

    
    ngOnInit(): void {       

        this.allLinks = Array.from(document.querySelectorAll('li a'));
        this.allLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.removeColor();
                link.classList.add('page-links');
            });
        });
    }

    goHome() {
        this._Router.navigate(['/home']);
        
    }

    
    removeColor() {
        this.allLinks.forEach(removeLink => {
            removeLink.classList.remove('page-links');
        });
    }

    eventItems() {
        
        /* access links */

        const all = document.getElementById('all')as HTMLElement ;
        const events = document.getElementById('events')as HTMLElement;
        /* access links */

        all.style.display = 'none';
        events.style.display = 'flex';
    }

    presentationItems() {
      
        /* access links */

        const all = document.getElementById('all')as HTMLElement ;
        const events = document.getElementById('events')as HTMLElement;
        const presentation = document.getElementById('presentation')as HTMLElement;
        /* access links */

        all.style.display = 'none';
        events.style.display = 'none';
        presentation.style.display = 'flex';

    }

    seminarItems() {
      
        /* access links */

        const all = document.getElementById('all')as HTMLElement ;
        const events = document.getElementById('events')as HTMLElement;
        const presentation = document.getElementById('presentation')as HTMLElement;
        const seminar = document.getElementById('seminar')as HTMLElement;
        /* access links */

        all.style.display = 'none';
        events.style.display = 'none';
        presentation.style.display = 'none';
        seminar.style.display = 'flex';

    }

    workshopItems() {
      
        /* access links */

        const all = document.getElementById('all')as HTMLElement ;
        const events = document.getElementById('events')as HTMLElement;
        const presentation = document.getElementById('presentation')as HTMLElement;
        const seminar = document.getElementById('seminar')as HTMLElement;
        const workshop = document.getElementById('workshop')as HTMLElement;
        /* access links */

        all.style.display = 'none';
        events.style.display = 'none';
        presentation.style.display = 'none';
        seminar.style.display = 'none';
        workshop.style.display = 'flex';

    }

    

    allItems() {
        /* access links */
        const all = document.getElementById('all')as HTMLElement ;
        const events = document.getElementById('events')as HTMLElement;
        const presentation = document.getElementById('presentation')as HTMLElement;
        const seminar = document.getElementById('seminar')as HTMLElement;
        const workshop = document.getElementById('workshop')as HTMLElement;
        /* access links */

        all.style.display = 'flex';
        events.style.display = 'none';
        presentation.style.display = 'none';
        seminar.style.display = 'none';
        workshop.style.display = 'none';

    }
    


    

}


