import { Component } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { ModalTareaComponent } from '../../components/modal-tarea/modal-tarea.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [IonicModule, CommonModule],
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss']
})
export class CalendarioPage {

  constructor(private modalCtrl: ModalController) {}

  async abrirModal() {
    const modal = await this.modalCtrl.create({
      component: ModalTareaComponent
    });

    await modal.present();
  }
}
