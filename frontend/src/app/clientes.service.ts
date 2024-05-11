import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  constructor(private httpClient: HttpClient) {}
  listado() {
    return this.httpClient.get('http://localhost:3000/clientes');
  }
  ver(data:any){
    console.log(data.avatar)
     this.httpClient.post('http://localhost:3000/clientes', data).subscribe(data=>{
      console.log('clientes service',data)
     })
  }
  pulsarBoton(){
    return this.httpClient.get('http://localhost:3000/clientes');
  }
}
