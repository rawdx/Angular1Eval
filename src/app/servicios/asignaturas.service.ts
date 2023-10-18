import { Injectable } from '@angular/core';
import { ASIGNATURAS } from '../modulos/asignaturas';
import { Asignatura } from '../modulos/asignatura';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsignaturasService {

  getAsignaturas():Observable<Asignatura[]>{
    return of(ASIGNATURAS);
  }
  constructor() { }
}
