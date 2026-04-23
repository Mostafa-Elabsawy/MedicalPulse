import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ButtonDirective, ButtonModule } from "primeng/button";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ButtonDirective, ButtonModule, CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  navbarCollapsed=signal<boolean>(true);

  toggleNavbar() {
    this.navbarCollapsed.set(!this.navbarCollapsed());
  }

}
