import { Component } from '@angular/core';
import { Pregunta } from '../modulos/pregunta';
import { PreguntasService } from '../servicios/preguntas.service';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent {
  preguntas:Pregunta[] = [];
  constructor(private preguntasService: PreguntasService) {}

  getPreguntas(): void {
    this.preguntasService.getPreguntas().subscribe(preguntas => this.preguntas = preguntas);
  }
  ngOnInit() {
    this.getPreguntas();
  }
}
