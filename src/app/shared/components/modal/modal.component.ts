import { Component, Inject,OnInit } from '@angular/core';
import { FormControl, FormGroup,  ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import { MensajeModel } from '../../../model/mensaje-model';
import { MensajeService } from '../../../service/mensaje.service';
import { IdService } from '../../../service/id/id.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [MatDialogModule,ReactiveFormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.sass'
})
export class ModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalComponent>,@Inject(MAT_DIALOG_DATA) public data: any,
  private mensajeService: MensajeService, private idShared : IdService) {}

  formMensaje: FormGroup = new FormGroup({});
  mensajes: MensajeModel[] = [];
  id = this.idShared.getId();
  
  ngOnInit() {

    this.id = this.idShared.getId();

    this.formMensaje = new FormGroup({
      id: new FormControl(this.id),
      mensaje: new FormControl('', Validators.required),
      progreso: new FormControl(Number, Validators.required),
      estado: new FormControl('', Validators.required)
    });

    this.list()

    if (this.id) {
      this.selectItemById(this.id);
    }

  }

  list(){
    this.mensajeService.getAllMessage().subscribe(data => {
      this.mensajes = data;
      if (this.id) {
        this.selectItemById(this.id);
      }
    });
  }

  selectItemById(id: number) {
    const selectedItem = this.mensajes.find(item => item.id === id);

    if (selectedItem) {

      this.formMensaje.patchValue({
        id: selectedItem.id,
        progreso: selectedItem.progreso,
        mensaje: selectedItem.mensaje,
        estado: selectedItem.estado
      });

    }

  }
  
  deleteMensaje() {

    const id = this.idShared.getId();

    if (id) {
      this.mensajeService.deleteMensaje(id).subscribe(() => {
        this.dialogRef.close(true);
        window.location.reload();
      });
    }
  }


  saveMensaje() {
    const mensaje: MensajeModel = {
      id: this.idShared.getId(),
      mensaje: this.formMensaje.value.mensaje,
      progreso: this.formMensaje.value.progreso,
      estado: this.formMensaje.value.estado
    };

    if (this.data.action === 'editar') {
      this.mensajeService.updateMensaje(mensaje).subscribe(() => {
        this.dialogRef.close(true);
        window.location.reload();
      });
    } else {
      this.mensajeService.saveMensaje(mensaje).subscribe(() => {
        this.dialogRef.close(true);
      });
    }
  }


}
