import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
    title = 'NGZOO';
    public email: string;

    ngOnInit() {
        this.email = localStorage.getItem( 'email' );
        console.log( localStorage.getItem( 'email' ) ); // obtenemos el valor de una variable guardada por su key 'email
    }

    ngDoCheck() {
        this.email = localStorage.getItem( 'email' );
    }

    // vaciar() {
    //     localStorage.removeItem('email'); // elimina solo un item del localStorage por key
    //     // localStorage.clear(); // Elimina todos los items que hay almacenados en el localStorage
    //     this.email = null; // pongo a null el campo email para que se borre
    // }

}
