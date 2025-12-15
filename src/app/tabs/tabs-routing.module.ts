import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      { path: 'inicio', loadChildren: () => import('../pages/inicio/inicio.module').then(m => m.InicioPageModule) },
      { path: 'materias', loadChildren: () => import('../pages/materias/materias.page').then(m => m.MateriasPage) },
      { path: 'tareas', loadChildren: () => import('../pages/tareas/tareas.page').then(m => m.TareasPage) },
      { path: 'calendario', loadChildren: () => import('../pages/calendario/calendario.page').then(m => m.CalendarioPage) },
      { path: 'perfil', loadChildren: () => import('../pages/perfil/perfil.page').then(m => m.PerfilPage) },
      { path: '', redirectTo: 'inicio', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
