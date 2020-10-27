import { Cliente } from './../model/cliente';
import { Component, OnInit } from '@angular/core';
import { ServiceCliente } from '../service/service-cliente';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  clientes : Cliente[]=[];

  constructor(private service : ServiceCliente) {

  }
  ngOnInit(): void {
     this.carregar();
  }


   public carregar(){
      this.service.findAll().subscribe(res=>{
           this.clientes = res;
      });
    }

}
