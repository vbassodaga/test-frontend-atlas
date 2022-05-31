import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '**', redirectTo: 'contract',
  },
  {
    path: 'contract',
    loadChildren: () => import('./contract/contract.module').then((m) => m.ContractModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
