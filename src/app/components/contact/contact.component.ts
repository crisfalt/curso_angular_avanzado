import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    public title = 'Contacto';
    public email: string;

    constructor() { }

    ngOnInit() {
        console.log('contact.component cargado');
    }

    guardarEmail(event) {
        localStorage.setItem('email', this.email ); // guardar un atributo en el navegador con una key 'email'
        localStorage.getItem( 'email' ); // obtenemos el valor de una variable guardada por su key 'email
        console.log( localStorage.getItem( 'email' ) );
    }

}
