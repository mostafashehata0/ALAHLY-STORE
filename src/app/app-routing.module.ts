import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KitsComponent } from './components/kits/kits.component';

const routes: Routes = [{ path: 'KITS', component: KitsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
