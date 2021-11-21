import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-servidores',
  templateUrl: './servidores.component.html',
  styleUrls: ['./servidores.component.css']
})

export class ServidoresComponent implements OnInit {

  // Informaciòn que deberìa traer el servidor web
  servidores = [
    {
      "id": 1,
      "nombre": "servidor1",
      "puerto": 8080,
      "clientes": [
        {"nombre": "usuario1", "luzVerde":true, "luzAmarilla": true, "luzRoja": true},
        {"nombre": "usuario2", "luzVerde":true, "luzAmarilla": true, "luzRoja": true}
      ]
    },
    {
      "id": 2,
      "nombre": "servidor2",
      "puerto": 9090,
      "clientes": [
        {"nombre": "usuario3", "luzVerde":false, "luzAmarilla": true, "luzRoja": true},
        {"nombre": "usuario4", "luzVerde":true, "luzAmarilla": false, "luzRoja": true}
      ]
    },
  ]
  clientes = []
  constructor() {
   }

  RowSelected(servidor:any){
    console.log(servidor);
    this.clientes = servidor.clientes
  }

  ngOnInit(): void {
    //cargar informaciòn de los servidores disponibles /getServers
  }

}
