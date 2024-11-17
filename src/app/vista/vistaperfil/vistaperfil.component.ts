import { Component } from '@angular/core';
import { NavComponent } from "../../components/nav/nav.component";
import { PersonaComponent } from "../../components/persona/persona.component";
import { FoteerComponent } from "../../components/foteer/foteer.component";

@Component({
  selector: 'app-vistaperfil',
  standalone: true,
  imports: [NavComponent, PersonaComponent, FoteerComponent],
  templateUrl: './vistaperfil.component.html',
  styleUrl: './vistaperfil.component.css'
})
export class VistaperfilComponent {

}
