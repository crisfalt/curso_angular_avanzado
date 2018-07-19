import {Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck, OnDestroy} from '@angular/core';

@Component({
    selector: 'app-parques',
    templateUrl: '/parques.component.html',
    styleUrls: ['/parques.component.css']
})
export class ParquesComponent implements OnChanges, OnInit, DoCheck, OnDestroy {
    @Input() nombre: string;
    public metros: number;
    public vegetacion: string;
    public abierto: boolean;

    /*generamos un evento Output para enviar datos a un componente padre
     con eventEmitter generamos un evento igual que un evento clic*/
    @Output() pasameLosDatos = new EventEmitter();

    // ejecucion del metodo abstracto del hook, este metodo se ejecuta cuando se hace
    // algun tipo de cambio de las propiedades o del componente mismo
    ngOnChanges( changes: SimpleChanges ) {
        console.log(changes);
    }

    // metodo se ejecuta cuando se carga la directiva o la etiqueta app-parque
    ngOnInit() {
        console.log('Meotodo on Init Lanzado');
    }

    // metodo que sejecuta cuando hay cualquier tipo de cambio en angular y que se ejecuta un evento o cualquier
    // algun otro cambio
    ngDoCheck() {
        console.log('el dochekc se ha ejecutado');
    }

    // se ejecuta justo antes de que se vaya a destruir un componente
    ngOnDestroy() {
        console.log('se va a elimiar el componente');
    }

    constructor() {
        this.nombre = 'parque natural';
        this.metros = 450;
        this.vegetacion = 'Alta';
        this.abierto = true;
    }

    emitirEvento() {
        // emit sirve para emitir atributos
        this.pasameLosDatos.emit({
            'nombre': this.nombre,
            'metros': this.metros,
            'vegetacion': this.vegetacion,
            'abierto': this.abierto
        });
    }

}
