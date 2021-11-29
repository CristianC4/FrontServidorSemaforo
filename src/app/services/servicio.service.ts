import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicioService {
  private endPoint = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {}

  public getServidores(): Observable<any> {
    return this.httpClient.get(`${this.endPoint}/getServidores`);
  }

  public saveSemaforo(requestBody: any): Observable<any> {
    return this.httpClient.post(`${this.endPoint}/saveSemaforo`, requestBody);
  }

  public getServidoresHardCoded() {
    return this.servidor;
  }

  public saveSemaforoHardCoded(requestBody: any) {
    console.log(requestBody);
  }

  servidor = [
    {
      id: 5000,
      nombre: 'Servidor5000',
      puerto: 5000,
      clientes: [
        {
          id: 1,
          nombre: 'cliente1',
          semaforos: [
            {
              id: 1,
              luzVerde: { estado: false, cantidad: 3 },
              luzAmarilla: { estado: false, cantidad: 2 },
              luzRoja: { estado: false, cantidad: 1 },
            },
            {
              id: 2,
              luzVerde: { estado: false, cantidad: 6 },
              luzAmarilla: { estado: false, cantidad: 5 },
              luzRoja: { estado: false, cantidad: 4 },
            },
          ],
        },
      ],
    },
  ];
}
