import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroComponentsModule } from '../../antd-module/ng-zorro-components.module';
import { FormsModule } from '@angular/forms';
import { NzImageModule } from 'ng-zorro-antd/image'; 
import { MenuService } from '../../../service/menu.service'
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgZorroComponentsModule, FormsModule, NzImageModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent {
  isCollapsed: boolean = false;

  constructor(private menuService: MenuService) {}

  toggleCollapsed() {
    this.menuService.toggleCollapsed();
  }

  ngOnInit() {
    this.menuService.collapsed$.subscribe(isCollapsed => {
      this.isCollapsed = isCollapsed;
    });
  }
}
