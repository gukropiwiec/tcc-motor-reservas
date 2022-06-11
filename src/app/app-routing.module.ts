import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UserGuard } from './guards/user.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'quartos',
    loadChildren: () => import('./pages/quartos/quartos.module').then( m => m.QuartosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pages/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'minha-conta',
    canActivate: [UserGuard],
    loadChildren: () => import('./pages/minha-conta/minha-conta.module').then( m => m.MinhaContaPageModule)
  },
  {
    path: 'minhas-reservas',
    canActivate: [UserGuard],
    loadChildren: () => import('./pages/minhas-reservas/minhas-reservas.module').then( m => m.MinhasReservasPageModule)
  },
  {
    path: 'detalhes-reserva/:id',
    loadChildren: () => import('./pages/detalhes-reserva/detalhes-reserva.module').then( m => m.DetalhesReservaPageModule)
  },
  {
    path: 'detalhes-quarto/:id',
    loadChildren: () => import('./pages/detalhes-quarto/detalhes-quarto.module').then( m => m.DetalhesQuartoPageModule)
  },
  {
    path: 'admin/dashboard',
    loadChildren: () => import('./pages/admin/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'admin/lista-reservas',
    loadChildren: () => import('./pages/admin/lista-reservas/lista-reservas.module').then( m => m.ListaReservasPageModule)
  },
  // {
  //   path: 'folder/:id',
  //   loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
