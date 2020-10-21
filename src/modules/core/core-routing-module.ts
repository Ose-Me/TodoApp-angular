import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { List } from '../user/components/list/list.component';

export const COMPONENTS = [];
const routes: Routes = [
  {
    path: '',
    component: List,
    children: [
      {
        path: '',
        redirectTo: 'admin',
        pathMatch: 'full',
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('../user/user.module').then((m) => m.UserModule),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
