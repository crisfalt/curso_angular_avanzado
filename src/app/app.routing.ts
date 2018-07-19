import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// importar los componentes creados para crear sus sistema de rutas
import { TiendaComponent } from './components/tienda/tienda.component';
import { ParquesComponent } from './components/parques/parques.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { KeeperComponent } from './components/keeper/keeper.component';
import { AnimalsComponent } from './components/animals/animals.component';

// definir un array que contendra todas las rutas
const appRoutes: Routes = [
    { path: '', component: HomeComponent }, // la ruta raiz para dirigir al componente TiendaComponent
    { path: '', redirectTo: 'home', pathMatch: 'full' }, // para redirigir a otra ruta
    { path: 'tienda', component: TiendaComponent }, // cuand escribamos la ruta tienda nos lleva al componente
    { path: 'home', component: HomeComponent },
    { path: 'animales', component: AnimalsComponent },
    { path: 'cuidadores', component: KeeperComponent },
    { path: 'contacto', component: ContactComponent },
    { path: '**', component: TiendaComponent }  // si se ecribe una ruta que no existe hace esta accion
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

