import { Component } from '@angular/core';
import { ButtonDirective, ButtonModule } from "primeng/button";

@Component({
  selector: 'app-home',
  imports: [ButtonDirective,ButtonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
