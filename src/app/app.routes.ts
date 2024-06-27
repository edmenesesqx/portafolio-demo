import { Routes } from '@angular/router';
import { CardComponent } from './componets/card/card.component';
import { PortafolioComponent } from './componets/portafolio/portafolio.component';
import { ClienteComponent } from './componets/cliente/cliente.component';
import { PlataformaServicioComponent } from './componets/plataforma-servicio/plataforma-servicio.component';

export const routes: Routes = [
    { path: 'card' , component: CardComponent},
    { path: 'portafolio' , component: PortafolioComponent},
    { path: 'cliente' , component: ClienteComponent},
    { path: 'plataforma-servicio', component: PlataformaServicioComponent},
    { path: '' , redirectTo: '/card' ,pathMatch: 'full'}
];
