import { Component } from '@angular/core';
import { NavComponent } from "../../components/nav/nav.component";
import { ProductosComponent } from "../../components/productos/productos.component";
import { FoteerComponent } from "../../components/foteer/foteer.component";

@Component({
  selector: 'app-vistaproductos',
  standalone: true,
  imports: [NavComponent, ProductosComponent, FoteerComponent],
  templateUrl: './vistaproductos.component.html',
  styleUrl: './vistaproductos.component.css'
})
export class VistaproductosComponent {

}
