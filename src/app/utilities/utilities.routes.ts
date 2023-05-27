import { Routes } from "@angular/router";

const routes: Routes = [
  { path: '', redirectTo: 'other', pathMatch: 'full' },
  {
    path: 'animations',
    loadComponent: () => import('./animations/animations.component').then(c => c.AnimationsComponent)
  },
  {
    path: 'borders',
    loadComponent: () => import('./borders/borders.component').then(c => c.BordersComponent)
  },
  {
    path: 'colors',
    loadComponent: () => import('./colors/colors.component').then(c => c.ColorsComponent)
  },
  {
    path: 'colors/:type',
    loadComponent: () => import('./colors/colors.component').then(c => c.ColorsComponent)
  },
  {
    path: 'other',
    loadComponent: () => import('./other/other.component').then(c => c.OtherComponent)
  },
]

export default routes;
