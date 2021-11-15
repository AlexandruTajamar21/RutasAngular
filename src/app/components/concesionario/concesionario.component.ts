import { Component, OnInit } from '@angular/core';
import { Coche } from 'src/app/models/coches';

@Component({
  selector: 'app-concesionario',
  templateUrl: './concesionario.component.html',
  styleUrls: ['./concesionario.component.css']
})
export class ConcesionarioComponent implements OnInit {
  public coches:Array<Coche>;
  public mensaje!:string;

  constructor() { 
    this.coches = [
      new Coche("Ford","Mustang",0,320,30,false),
      new Coche("Kia","Picanto",0,150,5,false),
      new Coche("Lamborguini","Murcielago",0,450,40,false)
    ]
  }

  seleccionarCochePadre(event:Coche):void{
    this.mensaje = "Coche Seleccionado! " + event.marca + ", Velocidad: " + event.velocidad;
  }

  ngOnInit(): void {
  }

}
