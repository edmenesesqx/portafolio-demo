import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroComponentsModule} from '../../shared/antd-module/ng-zorro-components.module';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { NzButtonModule } from 'ng-zorro-antd/button'; 
@Component({
  selector: 'app-plataforma-servicio',
  standalone: true,
  imports: [ CommonModule, NgZorroComponentsModule, FormsModule, HeaderComponent, FooterComponent, NzButtonModule],
  templateUrl: './plataforma-servicio.component.html',
  styleUrl: './plataforma-servicio.component.sass'
})
export class PlataformaServicioComponent {
  isContentVisibleNuevo: boolean = false;
  isContentVisibleEditar: boolean = false;
  
  toggleContent(content: string): void {
    
    
    if (content === 'nuevo') {
      this.isContentVisibleNuevo = !this.isContentVisibleNuevo;
      this.isContentVisibleEditar = false; // Asegura que "Editar" esté oculto
    } else if (content === 'editar') {
      this.isContentVisibleEditar = !this.isContentVisibleEditar;
      this.isContentVisibleNuevo = false; // Asegura que "Nuevo" esté oculto
     
    }
  }
  listOfAllData: any[] = [];
  listOfData: any[] = [];
  pageSize: number = 10;
  total: number = 50;
  pageIndex: number = 1;
  pageSizeOptions: number[] = [5, 10, 15];

  constructor() {
    this.generateData();
    this.loadData();
  }

  generateData(): void {
    for (let i = 0; i < 100; i++) {
      this.listOfAllData.push({
        key: i + 1,
        name: `Edward King ${i + 1}`,
        age: 32,
        address: `London, Park Lane no. ${i + 1}`
      });
    }
    this.total = this.listOfAllData.length;
  }

  loadData(): void {
    const startIndex = (this.pageIndex - 1) * this.pageSize;
    let endIndex = startIndex + this.pageSize;
    
    // Adjust endIndex if it exceeds the total number of items
    if (endIndex > this.total) {
      endIndex = this.total;
    }
    
    this.listOfData = this.listOfAllData.slice(startIndex, endIndex);
  }

  onPageSizeChange(size: number): void {
    this.pageSize = size;
    this.pageIndex = 1;
    this.loadData();
  }

  onPageIndexChange(index: number): void {
    this.pageIndex = index;
    this.loadData();
  }
}
