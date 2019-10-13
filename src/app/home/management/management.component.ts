import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {

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
