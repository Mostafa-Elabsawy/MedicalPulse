import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-radiology',
  imports: [ButtonModule, CommonModule],
  templateUrl: './radiology.html',
  styleUrl: './radiology.css',
})
export class Radiology {
  radiologyReports = [
    {
      title: 'Chest X-Ray',
      date: '2023-10-15',
      link: 'https://dummy-pdf-generator.vercel.app/api/pdf?text=Chest+X-Ray',
    },
    {
      title: 'Abdominal Ultrasound',
      date: '2023-10-12',
      link: 'https://dummy-pdf-generator.vercel.app/api/pdf?text=Ultrasound',
    },
    {
      title: 'Brain MRI',
      date: '2023-10-08',
      link: 'https://dummy-pdf-generator.vercel.app/api/pdf?text=Brain+MRI',
    },
    {
      title: 'CT Scan - Chest',
      date: '2023-10-05',
      link: 'https://dummy-pdf-generator.vercel.app/api/pdf?text=CT+Chest',
    },
    {
      title: 'Spine MRI',
      date: '2023-10-02',
      link: 'https://dummy-pdf-generator.vercel.app/api/pdf?text=Spine+MRI',
    },
    {
      title: 'Pelvic Ultrasound',
      date: '2023-09-28',
      link: 'https://dummy-pdf-generator.vercel.app/api/pdf?text=Pelvic+Ultrasound',
    },
    {
      title: 'Mammography',
      date: '2023-09-25',
      link: 'https://dummy-pdf-generator.vercel.app/api/pdf?text=Mammography',
    },
    {
      title: 'Sinus CT Scan',
      date: '2023-09-20',
      link: 'https://dummy-pdf-generator.vercel.app/api/pdf?text=Sinus+CT',
    },
    {
      title: 'Knee MRI',
      date: '2023-09-18',
      link: 'https://dummy-pdf-generator.vercel.app/api/pdf?text=Knee+MRI',
    },
    {
      title: 'Doppler Ultrasound',
      date: '2023-09-15',
      link: 'https://dummy-pdf-generator.vercel.app/api/pdf?text=Doppler',
    },
  ];
}
