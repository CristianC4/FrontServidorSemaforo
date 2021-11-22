import { NgClass } from '@angular/common';
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

  eventoCambioLuz(estado: boolean, tipo: String, semaforo: any){
    var index =  semaforo.id-1
    switch (tipo) {
      case 'verde':
        semaforo.luzVerde.estado = !estado
        this.semaforos[index] = semaforo
        console.log("Clickeando la luz : ",tipo)
        console.log("Pasando del estado : "+estado+" al estado "+!estado)
        console.log("Del semaforo ",semaforo.id)
        break;
      case 'amarilla':
        semaforo.luzAmarilla.estado = !estado
        this.semaforos[index] = semaforo
        console.log("Clickeando la luz : ",tipo)
        console.log("Pasando del estado : "+estado+" al estado "+!estado)
        console.log("Del semaforo ",semaforo.id)
        break;
      case 'roja':
        semaforo.luzRoja.estado = !estado
        this.semaforos[index] = semaforo
        console.log("Clickeando la luz : ",tipo)
        console.log("Pasando del estado : "+estado+" al estado "+!estado)
        console.log("Del semaforo ",semaforo.id)
        break;
      default:
        console.log("ALGO VA MAL !")
        break;
    }
    estado = !estado;
  }


}
