// importar modulos necesarios para crear un modulo
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';

// Importar componente necesario para crear un modulo
import { SaveEmailComponent} from './components/save-email/save-email.component';
import { ShowEmailComponent } from './components/show-email/show-email.component';
import { MainEmailComponent } from './components/main-email/main-email.component';

@NgModule({
  declarations: [
    SaveEmailComponent,
    ShowEmailComponent,
    MainEmailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [ // cargar el componente inicial y que carga los otros dos componentes
      MainEmailComponent
  ],
  providers: [
  ],
  // bootstrap: [AppComponent] // el componente que arranca la aplicacion
})
export class EmailModule { }
