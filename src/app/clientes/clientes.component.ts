import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor() { }

  /**
   * Variables que trae el servidor
   */
  @Input() clientes = [
    {
      "id": 0,
      "nombre": "anonymus",
      "semaforos" : [
        {
          "id": 0,
          "luzVerde":{"estado": false, "cantidad": 0},
          "luzAmarilla": {"estado": false, "cantidad": 0},
          "luzRoja": {"estado": false, "cantidad": 0}
        }
      ]
    }
  ]
  @Input() servidorId = 0
  
  /**
   * Variables auxiliares para guardar lo que se le quiere pasar al semaforo
   */
  semaforos = []
  clienteId = 0
  serverId = 0

  ngOnInit(): void {
  }

  RowSelected(cliente:any){
    console.log(cliente);
    this.semaforos = cliente.semaforos;
    this.clienteId = cliente.id;
    //this.serverId = this.servidorId
    console.log("Le estamos pasando estos semaforos",cliente.semaforos);
  }

}
