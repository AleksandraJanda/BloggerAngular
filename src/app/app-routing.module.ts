import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'admin',
    loadChildren: () => import('./components/admin/admin.module').then(mod => mod.AdminModule),
    data: { preload: true },
  },
  {
    path: 'profile/:id',
    loadChildren: () => import('./components/profile/profile.module').then(mod => mod.ProfileModule),
    data: { preload: true },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
