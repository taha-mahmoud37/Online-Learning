import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
 
})
export class HomeComponent implements OnInit {

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() {
        
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    ngOnInit(): void {
    }
  
    public array = ['assets/images/1.jpg', 'assets/images/image-1.jpg'];
    headContent = [
        {hContent: 'Best Online Learning'},
        {hContent: 'LintSchool is Online Platform'},
    
    ];

  
  
}
