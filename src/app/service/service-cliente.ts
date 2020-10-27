import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Cliente } from '../model/cliente';

const URL="http://localhost:3377/api";

@Injectable()
export class ServiceCliente{


     public constructor(private http: HttpClient){
     }

     
     public create(cliente : Cliente){
        return this.http.post<Cliente>(URL+"/save", cliente);
     }

     public findAll(){
        return this.http.get<Cliente[]>(URL+"/findAll");
     }



}