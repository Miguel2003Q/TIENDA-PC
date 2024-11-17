import { Routes } from '@angular/router';

import { VistaloginComponent } from './vista/vistalogin/vistalogin.component';
import { VistahomeComponent } from './vista/vistahome/vistahome.component';
import { VistaproductosComponent } from './vista/vistaproductos/vistaproductos.component';
import { VistaperfilComponent } from './vista/vistaperfil/vistaperfil.component';
import { VistaregistroComponent } from './vista/vistaregistro/vistaregistro.component';
import { Component } from '@angular/core';
import { DetallesComponent } from './vista/detalles/detalles.component';
export const routes: Routes = [
    {path:"inicio",component:VistahomeComponent},
    {path: "login",component:VistaloginComponent},
    {path: "perfil",component:VistaperfilComponent},
    {path: "productos", component:VistaproductosComponent},
    {path: "registro",component:VistaregistroComponent},
    {path: "detalle",component:VistaregistroComponent},
    {path: "detalle/:id",component:DetallesComponent}
];
