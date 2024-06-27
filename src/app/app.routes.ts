import { Routes } from '@angular/router';
import { PlataformaServicioComponent } from './componets/plataforma-servicio/plataforma-servicio.component';

export const routes: Routes = [
    { path: 'plataforma-servicio', component: PlataformaServicioComponent},
    { path: '' , redirectTo: '/plataforma-servicio' ,pathMatch: 'full'}
];
