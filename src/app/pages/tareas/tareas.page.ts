import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalTareaComponent } from '../../components/modal-tarea/modal-tarea.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-modal-tarea',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './tareas.page.html'
})
export class TareasPage {
  tareas: any[] = [];

  constructor(private modalCtrl: ModalController) {}

  async nuevaTarea() {
    const modal = await this.modalCtrl.create({
      component: ModalTareaComponent
    });

    modal.onDidDismiss().then(res => {
      if (res.data) {
        this.tareas.push(res.data);
      }
    });

    await modal.present();
  }
}
