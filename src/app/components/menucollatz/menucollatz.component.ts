import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menucollatz',
  templateUrl: './menucollatz.component.html',
  styleUrls: ['./menucollatz.component.css']
})
export class MenucollatzComponent implements OnInit {

  public numeros:Array<number>;

  constructor(private _activeRoute:ActivatedRoute ,private _router:Router) {
    this.numeros = [];
    for(let i = 0; i < 5;i++)
    {
      var ale = Math.round(Math.random()*100) ;
       this.numeros.push(ale);
    }
  }

  ngOnInit(): void {
  }

  enviarNumero(num:number):void{
    this._router.navigate(["/cuerpocolatz",num])
  }

}
