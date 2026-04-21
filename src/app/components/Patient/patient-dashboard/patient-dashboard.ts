import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { PatientInfo } from './patient-info/patient-info';
import { ButtonModule } from 'primeng/button';
import { LabResults } from './lab-results/lab-results';

@Component({
  selector: 'app-patient-dashboard',
  imports: [RouterOutlet, PatientInfo, ButtonModule, LabResults, RouterLink, RouterLinkActive],
  templateUrl: './patient-dashboard.html',
  styleUrl: './patient-dashboard.css',
})
export class PatientDashboard {
  
  menu = signal<boolean>(false);
  toggle() {
    this.menu.set(!this.menu());
  }
}
