import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
})
export class BodyComponent {
  mostrar = true;

  frase: any = {
    mensaje:
      'Piensa 2 veces antes de programar, sino estarás programando 2 veces antes de pensar',
    autor: 'Profesor Wilson UNEXPO',
  };

  personajes: string[] = ['spiderman', 'venom', 'Dr.Octopus'];
}
