import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalTareaComponent } from '../../components/modal-tarea/modal-tarea.component';

@Component({
  standalone: false,
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
