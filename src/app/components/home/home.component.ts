import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public title = 'Bienvenido a NGZoo';

    constructor() { }

    ngOnInit() {
        console.log('home component cargado');
    }

}
