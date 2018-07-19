import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    public title = 'Listar';
    public numbers = [0, 1, 2, 3, 4, 5]; // una forma de crear array
    public numbers2 = new Array(12); // otra forma de crear array

    constructor() { }

    ngOnInit() {
    }

}
