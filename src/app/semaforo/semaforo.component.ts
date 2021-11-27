import { NgClass } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { ServicioService } from '../services/servicio.service';

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
  @Input() servidorId = 0
  @Input() clienteId = 0

  semaforoSeleccionado = {}

  constructor(private  servicio: ServicioService) { }

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
        this.guardarCambio(semaforo,this.clienteId,this.servidorId)
        break;
      case 'amarilla':
        semaforo.luzAmarilla.estado = !estado
        this.semaforos[index] = semaforo
        console.log("Clickeando la luz : ",tipo)
        console.log("Pasando del estado : "+estado+" al estado "+!estado)
        console.log("Del semaforo ",semaforo.id)
        this.guardarCambio(semaforo,this.clienteId,this.servidorId)
        break;
      case 'roja':
        semaforo.luzRoja.estado = !estado
        this.semaforos[index] = semaforo
        console.log("Clickeando la luz : ",tipo)
        console.log("Pasando del estado : "+estado+" al estado "+!estado)
        console.log("Del semaforo ",semaforo.id)
        this.guardarCambio(semaforo,this.clienteId,this.servidorId)
        break;
      default:
        console.log("ALGO VA MAL !")
        break;
    }
    estado = !estado;
  }

  guardarCambio(semaforo: any, idCliente: number, idServidor: number){
    let requestBody = {
      "idServidor": idServidor,
      "idCliente": idCliente,
      "semaforo": semaforo
    }
    //this.servicio.saveSemaforo(requestBody).subscribe()
    this.servicio.saveSemaforoHardCoded(requestBody)
  }

}
