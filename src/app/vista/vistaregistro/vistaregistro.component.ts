import { Component } from '@angular/core';
import { NavComponent } from "../../components/nav/nav.component";
import { RegistroComponent } from "../../components/registro/registro.component";
import { FoteerComponent } from "../../components/foteer/foteer.component";

@Component({
  selector: 'app-vistaregistro',
  standalone: true,
  imports: [NavComponent, RegistroComponent, FoteerComponent],
  templateUrl: './vistaregistro.component.html',
  styleUrl: './vistaregistro.component.css'
})
export class VistaregistroComponent {

}
