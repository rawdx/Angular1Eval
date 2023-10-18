import { Component } from '@angular/core';
import { Asignatura } from '../modulos/asignatura';
import { AsignaturasService } from '../servicios/asignaturas.service';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
})
export class AsignaturasComponent {
  asignaturas:Asignatura[] = [];
  constructor(private asignaturasService: AsignaturasService) {}

  getAsignaturas(): void {
    this.asignaturasService.getAsignaturas().subscribe(asignaturas => this.asignaturas = asignaturas);
  }
  ngOnInit() {
    this.getAsignaturas();
  }
}
