import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-admin-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class AdminMainComponent implements OnInit {

    public title = 'Panel de administracion';

    constructor() { }

    ngOnInit() {
    }

}
