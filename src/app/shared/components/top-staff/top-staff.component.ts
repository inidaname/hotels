import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-staff',
  templateUrl: './top-staff.component.html',
  styleUrls: ['./top-staff.component.scss']
})
export class TopStaffComponent implements OnInit {
  // Data should come from database
  staffData: any[] = [
    {
      fullName: `Hassan Sani`,
      image: `fromSomewhere`,
      position: `Head of Department`,
      contact: `08035938903`,
      status: `Online`
    },
    {
      fullName: `Hassan Sani`,
      image: `fromSomewhere`,
      position: `Head of Department`,
      contact: `08035938903`,
      status: `Online`
    },
    {
      fullName: `Hassan Sani`,
      image: `fromSomewhere`,
      position: `Head of Department`,
      contact: `08035938903`,
      status: `Online`
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
