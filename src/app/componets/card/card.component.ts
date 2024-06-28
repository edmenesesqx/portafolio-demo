import { Component} from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { MensajeComponent } from './mensaje/mensaje.component';



@Component({
  selector: 'app-card',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,MensajeComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.sass'
})
export class CardComponent {



}
