import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor(private firestore: AngularFirestore) {}

  agregarTarea(tarea: any) {
    return this.firestore.collection('tareas').add(tarea);
  }

  getTareas() {
    return this.firestore.collection('tareas').valueChanges({ idField: 'id' });
  }

  eliminarTarea(id: string) {
    return this.firestore.collection('tareas').doc(id).delete();
  }
}
