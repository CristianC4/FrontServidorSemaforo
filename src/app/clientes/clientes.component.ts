import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor() { }

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

  semaforos = []

  ngOnInit(): void {
  }

  RowSelected(cliente:any){
    console.log(cliente);
    this.semaforos = cliente.semaforos;
    console.log("Le estamos pasando estos semaforos",cliente.semaforos);
  }

}
