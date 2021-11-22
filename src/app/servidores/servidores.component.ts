import { Component, OnInit,  DoCheck, KeyValueDiffers, KeyValueDiffer } from '@angular/core';
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
        {
          "id": 1,
          "nombre": "usuario1",
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
          ],
          
        },
        {
          "id": 2,
          "nombre": "usuario2",
          "semaforos" : [
            {
              "id": 1,
              "luzVerde":{"estado": true, "cantidad": 20},
              "luzAmarilla": {"estado": true, "cantidad": 20},
              "luzRoja": {"estado": true, "cantidad": 20}
            },
            {
              "id": 2,
              "luzVerde":{"estado": true, "cantidad": 20},
              "luzAmarilla": {"estado": false, "cantidad": 20},
              "luzRoja": {"estado": true, "cantidad": 20}
            }
          ],
        },
      ]
    },
    {
      "id": 2,
      "nombre": "servidor2",
      "puerto": 9090,
      "clientes": [
        {
          "id": 3,
          "nombre": "usuario3",
          "semaforos" : [
            {
              "id": 1,
              "luzVerde":{"estado": true, "cantidad": 30},
              "luzAmarilla": {"estado": true, "cantidad": 30},
              "luzRoja": {"estado": true, "cantidad": 30}
            },
            {
              "id": 2,
              "luzVerde":{"estado": true, "cantidad": 30},
              "luzAmarilla": {"estado": true, "cantidad": 30},
              "luzRoja": {"estado": true, "cantidad": 30}
            }
          ],
        },
        {
          "id": 4,
          "nombre": "usuario4",
          "semaforos" : [
            {
              "id": 1,
              "luzVerde":{"estado": true, "cantidad": 40},
              "luzAmarilla": {"estado": true, "cantidad": 40},
              "luzRoja": {"estado": true, "cantidad": 40}
            },
            {
              "id": 2,
              "luzVerde":{"estado": true, "cantidad": 40},
              "luzAmarilla": {"estado": true, "cantidad": 40},
              "luzRoja": {"estado": true, "cantidad": 40}
            }
          ],
        },
      ]
    },
  ]
  clientes = []
  differ: KeyValueDiffer<string, any>;
  constructor(private differs: KeyValueDiffers) {
    this.differ = this.differs.find({}).create();
  }

  RowSelected(servidor:any){
    console.log(servidor);
    this.clientes = servidor.clientes
  }

  ngOnInit(): void {
    //cargar informaciòn de los servidores disponibles /getServers
  }

  ngDoCheck() {
    const change = this.differ.diff(this);
    if (change) {
      change.forEachChangedItem(item => {
        console.log('item changed', item);
      });
    }
  }

}
