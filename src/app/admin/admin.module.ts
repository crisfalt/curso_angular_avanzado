// importaciones necesarias para crear un modulo
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AdminRoutingModule } from './admin-routing.module';

// importar componentes creados
import { AdminMainComponent } from './components/main/main.component';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';

// importar librerias adiccionales
import { EditorModule } from '@tinymce/tinymce-angular';

@NgModule({
    declarations: [
        AdminMainComponent,
        ListComponent,
        AddComponent,
        EditComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        AdminRoutingModule,
        BrowserModule,
        EditorModule
    ],
    providers: [

    ]
})
export class AdminModule {}
