import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ],
  selector: 'app-modal-tarea',
  templateUrl: './modal-tarea.component.html'
})
export class ModalTareaComponent {
  titulo = '';
  materia = '';
  fecha = '';

  constructor(private modalCtrl: ModalController) {}

  cerrar() {
    this.modalCtrl.dismiss();
  }

  guardar() {
    this.modalCtrl.dismiss({
      titulo: this.titulo,
      materia: this.materia,
      fecha: this.fecha
    });
  }
}
