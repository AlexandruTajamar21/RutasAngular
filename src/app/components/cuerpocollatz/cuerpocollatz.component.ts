import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-cuerpocollatz',
  templateUrl: './cuerpocollatz.component.html',
  styleUrls: ['./cuerpocollatz.component.css']
})
export class CuerpocollatzComponent implements OnInit {

  public numero!:number;
  public numeros!:Array<number>;

  constructor(private _activeRoute:ActivatedRoute) {
    
  }

  ngOnInit(): void {
    //Aqui es donde se recuperan los parametros
    //se utiliza una promesa llamada suscribe
    //y la promesa trae params con los parametros por su name
    this._activeRoute.params.subscribe((params: Params) =>{
      if(params['numero'] != null){
        this.numero = parseInt(params['numero'])
        console.log(this.numero)
        this.generarColatz();
      }
    });
  }

  generarColatz():void{
    this.numeros = new Array<number>();
    while(this.numero != 1){
      if(this.numero % 2 == 0)
      {
        this.numero = this.numero /2;
      }
      else
      {
        this.numero = this.numero * 3 +1;
      }
      this.numeros.push(this.numero);
    }
  }

}
