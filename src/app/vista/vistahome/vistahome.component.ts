import { Component } from "@angular/core";
import { FoteerComponent } from "../../components/foteer/foteer.component";

import { NavComponent } from "../../components/nav/nav.component";
import { InicioComponent } from "../../components/inicio/inicio.component";



@Component({
  selector: 'app-vistahome',
  standalone: true,
  imports: [
    NavComponent,
    FoteerComponent,
   
    InicioComponent
],
  templateUrl: './vistahome.component.html',
  styleUrls: ['./vistahome.component.css']
})
export class VistahomeComponent {
}


