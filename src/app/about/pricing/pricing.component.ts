/* eslint-disable linebreak-style */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-pricing',
    templateUrl: './pricing.component.html',
    styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

    constructor(private _Router:Router) { }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    ngOnInit(): void {
    }

    goHome() {
        this._Router.navigate(['/home']);
    }

}
