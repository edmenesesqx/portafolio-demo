import { Component,ViewChild,TemplateRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroComponentsModule} from '../../shared/antd-module/ng-zorro-components.module';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { MenuComponent } from '../../shared/components/menu/menu.component';
import { MenuService } from '../../service/menu.service';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'; 
import { NzSelectModule } from 'ng-zorro-antd/select';


@Component({
  selector: 'app-portafolio',
  standalone: true,
  imports: [ NzSelectModule, NzToolTipModule, CommonModule, NgZorroComponentsModule, FormsModule, HeaderComponent, FooterComponent, NzCheckboxModule, NzModalModule, NzInputModule,MenuComponent],
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.sass']
})

export class PortafolioComponent {
  @ViewChild('modalFooter', { static: false }) modalFooter!: TemplateRef<any>;
  listOfAllData: any[] = [];
  listOfData: any[] = [];
  pageSize: number = 10;
  total: number = 50;
  pageIndex: number = 1;
  pageSizeOptions: number[] = [5, 10, 15];
  isContentVisibleNuevo: boolean = false;
  isContentVisibleEditar: boolean = false;
  isCollapsed: boolean = false;
  verComp: boolean = false;
  checked = false;
  isVisible = false;
  inputValue?: string;
  changeModalContent = false;

  options = [
    { value: 'opcion1', label: 'Opción 1', tooltip: 'Este es el tooltip para la opción 1' },
    { value: 'opcion2', label: 'Opción 2', tooltip: 'Este es el tooltip para la opción 2' },
    { value: 'opcion3', label: 'Opción 3', tooltip: 'Este es el tooltip para la opción 3' },
    // agrega más opciones si es necesario
  ];
  ngOnInit() {
    this.menuService.collapsed$.subscribe(isCollapsed => {
      this.isCollapsed = isCollapsed;
    });
  }

  showModal(): void {
    this.isVisible = true;
    // this.changeModalContent = true;
    // si quieren ver la otra carga del modal
    this.changeModalContent = false; 
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  toggleContent(): void {
    this.isContentVisibleNuevo = !this.isContentVisibleNuevo;
    // if (content === 'nuevo') {
    //   this.isContentVisibleEditar = false; // Asegura que "Editar" esté oculto
    // } else if (content === 'editar') {
    //   this.isContentVisibleEditar = !this.isContentVisibleEditar;
    //   this.isContentVisibleNuevo = false; // Asegura que "Nuevo" esté oculto
     
    // }
  }
  verComponente():void{
    this.verComp = !this.verComp;
  }

  constructor(private menuService: MenuService) {
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
