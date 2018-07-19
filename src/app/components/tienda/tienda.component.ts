import { Component, OnInit } from '@angular/core';
import { trigger, animate , state, transition, style } from '@angular/animations';

declare var jQuery: any;
declare var $: any;
declare var tinymce: any;

@Component({
    selector: 'app-tienda',
    templateUrl: '/tienda.component.html',
    styleUrls : ['/tienda.component.css'],
    animations: [
        trigger( 'marcar', [
            state( 'inactive', style( {
                border: '5px solid #cccccc'
            })),
            state( 'active', style({
                border: '5px solid yellow',
                background: 'red',
                borderRadius: '50px',
                transform: 'scale(1.3)'
            })),
            transition('inactive => active', animate('3s linear')),
            transition('active => inactive', animate('3s linear'))
        ] )
    ]
})
export class TiendaComponent implements OnInit {
    public titulo;
    public nombreDelParque: string;
    public miParque;
    public editor: string;
    public state: string;

    constructor() {
        this.titulo = 'esta es la tienda';
        this.state = 'inactive';
    }

    ngOnInit() {
        $('#txtJq').hide();
        $('#btnJq').click( function() {
            $('#txtJq').slideToggle(); // cuando hay un deslizado de arriba a abajo y muestra el elemento
        });

        $('#caja').dotdotdot();
    }

    mostrarNombre() {
        console.log(this.nombreDelParque);
    }

    verDatosParque(event) {
        // console.log('la perra de kevin');
        this.miParque = event;
        console.log(this.miParque);
        console.log(this.editor);
    }

    // metodo para cambiar el estado de un componente
    cambiarEstado() {
        if ( this.state === 'inactive' ) {
            this.state = 'active';
        } else {
            this.state = 'inactive';
        }
    }

}

