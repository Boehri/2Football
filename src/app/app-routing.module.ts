import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoTabsComponent } from './info-tabs/info-tabs.component';

const routes: Routes = [
  {path: 'results/:league', component: InfoTabsComponent},
  { path: '', redirectTo: 'results', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
