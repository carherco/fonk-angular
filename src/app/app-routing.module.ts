import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FonkAloneComponent } from './pages/fonk-alone/fonk-alone.component';
import { FonkIntegratedValidatorsComponent } from './pages/fonk-integrated-validators/fonk-integrated-validators.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fonk-alone', component: FonkAloneComponent },
  { path: 'fonk-angular', component: FonkIntegratedValidatorsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
