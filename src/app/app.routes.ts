import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: '',
    // 第一層 app component router-outlet進來後，LayoutComponent再看到router-outlet，會往 children 找載入
    component: LayoutComponent,
    canActivate : [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        // component 內加 default 可以不用加 then
        loadComponent: () => import('./dashboard/dashboard.component')
      },
      {
        path: 'charts',
        loadComponent: () => import('./charts/charts.component').then(c => c.ChartsComponent)
      },
      {
        path: 'tables',
        loadComponent: () => import('./tables/tables.component').then(c => c.TablesComponent)
      },
      {
        path: 'utilities',
        // 如果在此指定component，就會從此component中找router-outlet，且載入父子倆個component
        // loadChildren : 自己的路由自己管理
        loadChildren: () => import('./utilities/utilities.routes')
      },
      {
        path: 'not-found',
        loadComponent: () => import('./not-found/not-found.component').then(c => c.NotFoundComponent)
      }
    ]
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.component').then(c => c.RegisterComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(c => c.LoginComponent)
  }
  ,
  // 萬用路由一定要放最後
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' } // redirectTo避免爬蟲爬到無效路徑
];
