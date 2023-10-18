import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { AsignaturasComponent } from './asignaturas/asignaturas.component';

const routes: Routes = [
  { path: 'asignaturas', component: AsignaturasComponent },
  { path: 'preguntas', component: PreguntasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
