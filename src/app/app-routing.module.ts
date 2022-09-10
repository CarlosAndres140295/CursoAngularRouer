import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { CustomPreloadService } from './services/custom-preload.service' // Estrategia de percarga personalizada
import { QuicklinkStrategy } from 'ngx-quicklink';

// Vistas
import { NotFoundComponent } from './not-found/not-found.component';

import { AdminGuard } from './guards/admin.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule),
    data: {
      preload: true
    }
  },
  {
    path: 'cms',
    canActivate: [AdminGuard],
    loadChildren: () => import('./cms/cms.module').then(m => m.CmsModule)
  },
  { path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy:  QuicklinkStrategy  // Precarga de modulos usar solo cuando la app no tenga tantos modulos con el servicio PreloadAllModules o el ser
                                            // servicio creado como es el caso CustomPreloadService
                                            // QuicklinkStrategy desarrollado por la comunidada npm i ngx-quicklink --save, se debe habilitar para cada modulo.ts
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
