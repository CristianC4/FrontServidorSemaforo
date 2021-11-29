import { Component, OnInit} from '@angular/core';
import {timer, interval} from 'rxjs';
import { ServicioService } from '../services/servicio.service';

@Component({
  selector: 'app-servidores',
  templateUrl: './servidores.component.html',
  styleUrls: ['./servidores.component.css']
})

export class ServidoresComponent implements OnInit {
  // Informaciòn que deberìa traer el servidor web
  servidores: any = [
    {
      "id": 1,
      "nombre": "servidor-default",
      "puerto": 1010,
      "clientes": [
        {
          "id": 1,
          "nombre": "usuario-default",
          "semaforos" : [
            {
              "id": 1,
              "luzVerde":{"estado": true, "cantidad": 10},
              "luzAmarilla": {"estado": true, "cantidad": 10},
              "luzRoja": {"estado": true, "cantidad": 10}
            },
            {
              "id": 2,
              "luzVerde":{"estado": true, "cantidad": 10},
              "luzAmarilla": {"estado": false, "cantidad": 10},
              "luzRoja": {"estado": true, "cantidad": 10}
            }
          ]          
        }
      ]
    }
  ]
  clientes = [];
  servidorId = 0;

  constructor(private servicio: ServicioService) {}

  RowSelected(servidor:any){
    console.log(servidor);
    this.clientes = servidor.clientes
    this.servidorId = servidor.id
  }

  ngOnInit(): void {
    //cargar informaciòn de los servidores disponibles /getServers
    this.servicio.getServidores().subscribe((response) => {
      this.servidores = response
      console.log(this.servidores)
    });
    // timer jsx para postear la variable
    const contador = interval(5000); // 5 seg
    contador.subscribe(()=>{
      console.log("Haciendo la petición cada 5 segundos")
      this.servicio.getServidores().subscribe((response) => {
        this.servidores = response
        console.log(this.servidores)
      });
    })
  }

}
