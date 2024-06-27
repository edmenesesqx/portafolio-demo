import { Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ModalComponent } from '../../../shared/components/modal/modal.component';
import { MensajeService } from '../../../service/mensaje.service';
import { MensajeModel } from '../../../model/mensaje-model';
import { FormControl, FormGroup,  ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule} from '@angular/material/dialog';
import { IdService } from '../../../service/id/id.service';

@Component({
  selector: 'app-mensaje',
  standalone: true,
  imports: [MatDialogModule,ReactiveFormsModule],
  templateUrl: './mensaje.component.html',
  styleUrl: './mensaje.component.sass'
})
export class MensajeComponent implements OnInit{

  mensajes: MensajeModel[] = [];
  filteredMensajes: MensajeModel[] = [];
  filterForm: FormGroup = new FormGroup({});
  formMensaje: FormGroup = new FormGroup({});

  
  constructor(public dialogRef: MatDialog, private mensajeService: MensajeService,
    private sharedId: IdService){

      this.filterForm = new FormGroup({
        searchNumber: new FormControl(null),
        searchText: new FormControl(''),
        filterOption: new FormControl('Todos')
      });

      this.formMensaje = new FormGroup({
        mensaje: new FormControl('', Validators.required),
        progreso: new FormControl(null),
        estado: new FormControl('Por empezar',Validators.required)
      });
    }
  
  ngOnInit() {
      this.list();
  }


  applyFilter() {
    const { searchText, filterOption, searchNumber } = this.filterForm.value;
  
    this.filteredMensajes = this.mensajes.filter(mensaje => {
      const matchesText = mensaje.mensaje.toLowerCase().includes(searchText.toLowerCase());
      const matchesNumber = searchNumber == null || mensaje.progreso.toString().includes(searchNumber.toString());
      const matchesOption = filterOption === 'Todos' || mensaje.estado === filterOption;
  
      return matchesText && matchesOption && matchesNumber;
    });
  }  

  list(){
    this.mensajeService.getAllMessage().subscribe(data => {
        this.mensajes = data;
        this.filteredMensajes = data;
    },
    error =>{
      console.log(error);
    }  
  );
  }

  newMensaje(){
    if (this.formMensaje.valid) {
      this.mensajeService.saveMensaje(this.formMensaje.value).subscribe(
        (data) => {
          console.log('Mensaje guardado exitosamente', data);
          this.list();
          this.formMensaje.reset();
        },
        (error) => {
          console.error('Error al guardar mensaje', error);
        }
      );
    } else {
      console.error('El formulario no es válido');
    }
  }

  downloadPdf() {
    this.mensajeService.downloadPdfMensaje().subscribe(response => {
      const blob = new Blob([response], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'mensajes.pdf';
      a.click();
      window.URL.revokeObjectURL(url);
    }, error => {
      console.error('Error al descargar el PDF', error);
    });
  }

  sendId(id: number) {
    this.sharedId.setId(id);
  }

  openModal(action: string) {
    this.dialogRef.open(ModalComponent, {
      data: { action },
      width: '950px',
    });
  }

  openModalEliminar(action: string) {
    this.dialogRef.open(ModalComponent, {
      data: { action },
      width: '500px',
    });
  }

}
