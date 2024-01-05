import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexRouterComponent } from './views/index-router/index-router.component';
import { AboutViewComponent } from './views/about-view/about-view.component';
import { TableViewComponent } from './views/table-view/table-view.component';
import { TableShowViewComponent } from './views/table-show-view/table-show-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/table',
    pathMatch: 'full'
  },
  {
    path: 'table',
    component: IndexRouterComponent,
    children: [
      {
        path: '',
        component: TableViewComponent
      },
      {
        path: ':id',
        component: TableShowViewComponent
      }
    ]

  },
  {
    path: 'about',
    component: AboutViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
