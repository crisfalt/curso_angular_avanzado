import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-save-email',
  templateUrl: './save-email.component.html',
  styleUrls: ['./save-email.component.css']
})
export class SaveEmailComponent implements OnInit {

    public title = 'Mostrar Email';
    public email: string;

    constructor() { }

    ngOnInit() {
    }

    guardarEmail(event) {
        localStorage.setItem('email', this.email ); // guardar un atributo en el navegador con una key 'email'
        localStorage.getItem( 'email' ); // obtenemos el valor de una variable guardada por su key 'email
        console.log( localStorage.getItem( 'email' ) );
    }

}
