import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoiListPageComponent } from './pages/poi-list-page/poi-list-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/poi-list', pathMatch: 'full' },
  { path: 'poi-list', component: PoiListPageComponent },
  // otras rutas aquí
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
