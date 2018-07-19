import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// importar componentes creados
import { AdminMainComponent } from './components/main/main.component';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';

const adminRoutes: Routes = [
    {
        path: 'admin-panel',
        component: AdminMainComponent,
        children: [
            { path: 'listado', component: ListComponent },
            { path: 'crear', component: AddComponent },
            { path: 'editar', component: EditComponent }
        ]
    }
];
@NgModule ({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule {}
