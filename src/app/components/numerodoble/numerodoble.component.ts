import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-numerodoble',
  templateUrl: './numerodoble.component.html',
  styleUrls: ['./numerodoble.component.css']
})
export class NumerodobleComponent implements OnInit {

  public numero!: number;
  public doble!:number;

  constructor(private _activeRoute:ActivatedRoute ,private _router:Router) {

  }

  redirect(num:number):void{
    this._router.navigate(["/numerodoble",num])
  }

  ngOnInit(): void {
    //Aqui es donde se recuperan los parametros
    //se utiliza una promesa llamada suscribe
    //y la promesa trae params con los parametros por su name
    this._activeRoute.params.subscribe((params: Params) =>{
      if(params['numero'] != null){
        this.numero = parseInt(params['numero']);
        this.doble = this.numero*2;
      }
    });
  }

}
