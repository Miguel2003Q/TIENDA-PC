import { Component } from '@angular/core';
import { NavComponent } from "../../components/nav/nav.component";
import { LoginComponent } from "../../components/login/login.component";
import { FoteerComponent } from "../../components/foteer/foteer.component";

@Component({
  selector: 'app-vistalogin',
  standalone: true,
  imports: [NavComponent, LoginComponent, FoteerComponent],
  templateUrl: './vistalogin.component.html',
  styleUrl: './vistalogin.component.css'
})
export class VistaloginComponent {

}
