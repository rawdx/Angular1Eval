import { Injectable } from '@angular/core';
import { Pregunta } from '../modulos/pregunta';
import { PREGUNTAS } from '../modulos/preguntas';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  getPreguntas():Observable<Pregunta[]>{
    return of(PREGUNTAS);
  }
  constructor() { }
}
