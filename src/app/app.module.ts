import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { ParquesComponent } from './components/parques/parques.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { KeeperComponent } from './components/keeper/keeper.component';
import { AnimalsComponent } from './components/animals/animals.component';

// importacion del tinycme
import { EditorModule } from '@tinymce/tinymce-angular';
import { EmailModule } from './modules/email/email.module';
import { AdminModule } from './admin/admin.module';


@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    ParquesComponent,
    HomeComponent,
    ContactComponent,
    KeeperComponent,
    AnimalsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    routing,
    EditorModule, // Uso del tinymce
    EmailModule, // importar el module email dentro de la carpeta modules
    AdminModule // importamos el modulo de admin
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent] // el componente que arranca la aplicacion
})
export class AppModule { }
