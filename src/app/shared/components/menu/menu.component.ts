import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroComponentsModule} from '../../antd-module/ng-zorro-components.module';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button'; 
import { MenuService } from '../../../service/menu.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ CommonModule, NgZorroComponentsModule, FormsModule, NzButtonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.sass'
})
export class MenuComponent {
  isCollapsed: boolean = false;

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.menuService.collapsed$.subscribe(isCollapsed => {
      this.isCollapsed = isCollapsed;
    });
  }
}
