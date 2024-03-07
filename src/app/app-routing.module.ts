import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaludoComponent } from './saludo/saludo.component';
import { CronometroComponent } from './cronometro/cronometro.component';

const routes: Routes = [
  {path: "saludo/:firstTime", component: SaludoComponent},
  {path: "cronometro", component: CronometroComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
