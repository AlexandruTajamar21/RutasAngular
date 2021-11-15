import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';
import { Coche } from 'src/app/models/coches';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css']
})
export class CocheComponent implements OnInit {

  @Input() car!: Coche;
  public mensaje!: string;
  @Output() seleccionarCoche: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  seleccionarCocheHijo():void{
    this.seleccionarCoche.emit(this.car);
  }
  
  ngOnInit(): void {
    this.comprobarEstado();
  }

  comprobarEstado():boolean{
    if(this.car.estado == false)
    {
      this.mensaje = "El coche esta apagado"
      this.car.velocidad = 0;
      return false;
    }
    else
    {
      this.mensaje="El coche esta encendido"
      return true;
    }
  }

  encenderCoche():void{
    if(this.car.estado == true)
    {
      this.car.estado = false;
      this.mensaje = "El coche esta apagado"
      this.car.velocidad = 0;
    }
    else
    {
      this.car.estado = true;
      this.mensaje="El coche esta encendido"
    }
  }

  acelerarCoche():void{
    if(this.car.estado == true && this.car.velocidad < this.car.velocidadMaxima)
    {
      this.car.velocidad += this.car.aceleracion;
    }
    else
    {
      if(this.car.velocidad >= this.car.velocidadMaxima)
      {
        alert("No se puede acelerar mas")
      }
      else{
        alert("el coche no esta encendido");
      }
      
    }
  }


}
