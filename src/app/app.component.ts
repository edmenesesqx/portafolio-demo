import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './componets/card/card.component';
import { PortafolioComponent } from './componets/portafolio/portafolio.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CardComponent,PortafolioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'Portafolio';
}
