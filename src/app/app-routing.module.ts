import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FonkAloneComponent } from './pages/fonk-alone/fonk-alone.component';
import { FonkIntegratedValidatorsComponent } from './pages/fonk-integrated-validators/fonk-integrated-validators.component';
import { FonkAloneUiComponent } from './pages/fonk-alone-ui/fonk-alone-ui.component';
import { FonkIntegratedValidatorsUiComponent } from './pages/fonk-integrated-validators-ui/fonk-integrated-validators-ui.component';
import { FonkGenericValidatorConverterComponent } from './pages/fonk-generic-validator-converter/fonk-generic-validator-converter.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fonk-alone', component: FonkAloneComponent },
  { path: 'fonk-alone-ui', component: FonkAloneUiComponent },
  { path: 'fonk-angular', component: FonkIntegratedValidatorsComponent },
  { path: 'fonk-angular-ui', component: FonkIntegratedValidatorsUiComponent },
  { path: 'fonk-generic-converter', component: FonkGenericValidatorConverterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class RoutingModule { }
