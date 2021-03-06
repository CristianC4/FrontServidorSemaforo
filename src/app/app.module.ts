import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServidoresComponent } from './servidores/servidores.component';
import { ClientesComponent } from './clientes/clientes.component';
import { SemaforoComponent } from './semaforo/semaforo.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ServidoresComponent,
    ClientesComponent,
    SemaforoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
