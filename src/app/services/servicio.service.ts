import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private endPoint = 'http://localhost:8080'

  constructor(private httpClient: HttpClient) { }

  public getServidores():Observable<any>{
    return this.httpClient.get(`${this.endPoint}/getServidores`);
  }

  public saveSemaforo(requestBody: any):Observable<any>{
    return this.httpClient.post(`${this.endPoint}/saveSemaforo`, requestBody);
  }

  public getServidoresHardCoded(){
    return this.servidor
  }

  public saveSemaforoHardCoded(requestBody: any){
    console.log(requestBody)
  }

  servidor = [{
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

}
