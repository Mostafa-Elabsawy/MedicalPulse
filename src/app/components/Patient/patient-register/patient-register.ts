import { Component, signal, WritableSignal} from '@angular/core';
import { Personal } from './personal/personal';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { NgClass } from '@angular/common';
import { defaultPersonalData, PersonalDataSchema ,ContatactDataSchema,defaultContactData, MedicalDataSchema, defaultMeicalData, SecurityDataSchema, defaultSecurityData} from './interface';
import { Contact } from './contact/contact';
import { Medical } from './medical/medical';
import { Security } from './security/security';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-patient-register',
  imports: [
    AnimateOnScrollModule,
    StepperModule,
    ButtonModule,
    Personal,
    NgClass,
    Contact,
    Medical,
    Security,
    ReactiveFormsModule
  ],
  templateUrl: './patient-register.html',
  styleUrl: './patient-register.css',
})
export class PatientRegister {
  title=new FormControl('');
  activeStep = 1;
  validation=signal<boolean>(false);
  personaldata = signal<PersonalDataSchema>(defaultPersonalData);
  contactdata = signal<ContatactDataSchema>(defaultContactData);
  medicaldata = signal<MedicalDataSchema>(defaultMeicalData);
  securitydata = signal<SecurityDataSchema>(defaultSecurityData);
  updateSignal<T>(data: T, signal: WritableSignal<T>) {
    signal.set(data);
    // console.log(signal());
  }
  UpdateData(data: any, signal: WritableSignal<any>, type: string) {
    if (type == 'personal') this.updateSignal<PersonalDataSchema>(data, signal);
    else if (type == 'contact') this.updateSignal<ContatactDataSchema>(data, signal);
    else if (type == 'medical') this.updateSignal<MedicalDataSchema>(data, signal);
    else if (type == 'security') this.updateSignal<SecurityDataSchema>(data, signal);
  }
  print(data:any) {
    console.log(data.value, data.valid);
  }
  submitForm() {
    console.log(this.personaldata());
    console.log(this.contactdata());
    console.log(this.medicaldata());
    console.log(this.securitydata());
    let finalObject = {
      ...this.personaldata().value,
      ...this.contactdata().value,
      ...this.medicaldata().value,
      password: this.securitydata().value.password,
    };
    console.log("finalobjec",finalObject);
  }
}
