import { Component, signal,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './components/Patient/patient-register/Trash/home/home';
import { Home2 } from './components/Patient/patient-register/Trash/home2/home2';
import { Try2 } from './components/Patient/patient-register/Trash/try2/try2';
import { Testing } from './components/Patient/patient-register/Trash/testing/testing';
import{ PatientRegister } from './components/Patient/patient-register/patient-register';
import { PatientDashboard } from './components/Patient/patient-dashboard/patient-dashboard';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Testing,Try2,RouterOutlet,Home,Home2, PatientRegister,PatientDashboard],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App  {
  protected readonly title = signal('app');
}
