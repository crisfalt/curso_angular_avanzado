import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-show-email',
  templateUrl: './show-email.component.html',
  styleUrls: ['./show-email.component.css']
})
export class ShowEmailComponent implements OnInit, DoCheck {

    public title = 'Guardar Email';
    public email: string;

    constructor() { }

    ngOnInit() {
        this.email = localStorage.getItem( 'email' );
        console.log( localStorage.getItem( 'email' ) ); // obtenemos el valor de una variable guardada por su key 'email
    }

    ngDoCheck() {
        this.email = localStorage.getItem( 'email' );
    }

    vaciar() {
        localStorage.removeItem('email'); // elimina solo un item del localStorage por key
        // localStorage.clear(); // Elimina todos los items que hay almacenados en el localStorage
        this.email = null; // pongo a null el campo email para que se borre
    }

}
