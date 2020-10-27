import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ServiceCliente } from '../service/service-cliente';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  cliente : Cliente = new Cliente();
  msg : Cliente= new Cliente;
  constructor(private service : ServiceCliente) {
    this.cliente = new Cliente();
  }


  public gravar(){
     
     this.service.create(this.cliente).subscribe(res=>{
        console.log("dados gravados" + this.cliente);
        this.msg = res;
     })
  }



}
