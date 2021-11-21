import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.css']
})
export class SemaforoComponent implements OnInit {

  @Input() semaforos = [
    {
      "id": 0,
      "luzVerde": {
        "estado": false,
        "cantidad": 0
      },
      "luzAmarilla": {
        "estado": false,
        "cantidad": 0
      },
      "luzRoja": {
        "estado": false,
        "cantidad": 0
      }
    }
  ]

  semaforoSeleccionado = {}

  constructor() { }

  ngOnInit(): void {
    console.log('imprimiento el semaforo : ',this.semaforos)
  }

  cambiarLuz(estado: boolean, tipo: String){
    estado = !estado;
    switch (tipo) {
      case 'verde':
        console.log("Clickeando color verde")
        break;
      case 'amarilla':
        console.log("Clickeando color amarilla")
        break;
      case 'roja':
        console.log("Clickeando color roja")
        break;
      default:
        console.log("ALGO VA MAL !")
        break;
    }
  }

}
