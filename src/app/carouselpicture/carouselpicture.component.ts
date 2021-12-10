/* eslint-disable linebreak-style */
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
    selector: 'app-carouselpicture',
    templateUrl: './carouselpicture.component.html',
    styleUrls: ['./carouselpicture.component.scss']
})
export class CarouselpictureComponent implements OnInit {

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() { }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    ngOnInit(): void {
    }
    customOptions: OwlOptions = {
        loop: true,
        autoplay: true,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        dots: false,
        navSpeed: 700,
        navText: ['', ''],
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 3,
            },
            740: {
                items: 4,
            },
            940: {
                items: 4,
            },
            1200: {
                items: 4,
            },
            1400: {
                items: 4,
            }
        },
    
    };

}
