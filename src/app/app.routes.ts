import { Routes } from '@angular/router';
import { PatientRegister } from './components/Patient/patient-register/patient-register';
import { PatientDashboard } from './components/Patient/patient-dashboard/patient-dashboard';
import { LabResults } from './components/Patient/patient-dashboard/lab-results/lab-results';
import { PatientInfo } from './components/Patient/patient-dashboard/patient-info/patient-info';
import { Radiology } from './components/Patient/patient-dashboard/radiology/radiology';
import { Visitis } from './components/Patient/patient-dashboard/visitis/visitis';
import { Login } from './components/login/login';
import { Home } from './components/home/home';
export const routes: Routes = [
  {path: 'home', component:Home},
  {
    path: "login",
    component: Login,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'patient-register',
    component: PatientRegister,
  },
  {
    path: 'patient-dashboard',
    component: PatientDashboard,
    children: [
      {path: '', redirectTo: 'Patient-Info', pathMatch: 'full'},
      {
        path: 'Patient-Info',
        component: PatientInfo,
      },
      {
        path: 'Lab-Results',
        component: LabResults,
      },
      {
        path: 'Radiology-Reports',
        component: Radiology,
      },
      {
        path: 'Visits',
        component: Visitis,
      },
    ],
  },
];
