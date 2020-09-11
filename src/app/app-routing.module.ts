import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'lista-servicos',
    loadChildren: () => import('./paginas/lista-servicos/lista-servicos.module').then( m => m.ListaServicosPageModule)
  },
  {
    path: 'servicos-detalhes/:id',
    loadChildren: () => import('./paginas/servicos-detalhes/servicos-detalhes.module').then( m => m.ServicosDetalhesPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./paginas/admin/admin.module').then( m => m.AdminPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
