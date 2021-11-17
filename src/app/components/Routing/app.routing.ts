import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";


import { HomeComponent } from "../home/home.component";
import { MusicaComponent } from "../musica/musica.component";
import { CineComponent } from "../cine/cine.component";
import { TelevisionComponent } from "../television/television.component";
import { Error404Component } from "../error404/error404.component";
import { NumerodobleComponent } from "../numerodoble/numerodoble.component";
import { MenucollatzComponent } from "../menucollatz/menucollatz.component";
import { CuerpocollatzComponent } from "../cuerpocollatz/cuerpocollatz.component";
import { ListaproductosComponent } from "../listaproductos/listaproductos.component";
import { CocheComponent } from "../coche/coche.component";
import { ConcesionarioComponent } from "../concesionario/concesionario.component";

const appRoutes: Routes = [
    {path:"" , component:HomeComponent}
    ,{path:"home" , component:HomeComponent}
    ,{path:"cine" , component:CineComponent}
    ,{path:"numerodoble", component:NumerodobleComponent}
    ,{path:"numerodoble/:numero", component:NumerodobleComponent}
    ,{path:"musica" , component:MusicaComponent}
    ,{path:"television" , component:TelevisionComponent}
    ,{path:"menucollatz", component:MenucollatzComponent}
    ,{path:"cuerpocolatz/:numero", component:CuerpocollatzComponent}
    ,{path:"listaproductos", component:ListaproductosComponent}
    ,{path:"listacoches",component:CocheComponent}
    ,{path:"**", component:Error404Component}

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);