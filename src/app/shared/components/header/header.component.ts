import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroComponentsModule } from '../../antd-module/ng-zorro-components.module';
import { FormsModule } from '@angular/forms';
import { NzImageModule } from 'ng-zorro-antd/image'; 

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgZorroComponentsModule, FormsModule, NzImageModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent {

}
