import { Component, OnInit } from '@angular/core';
import { ApiService } from '@services/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  staffForm: FormGroup;

  constructor(
    private api: ApiService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.staffForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required]
    });
  }

  get f (){ return this.staffForm.controls; }

  createStaff() {
    this.staffForm.value.password = this.staffForm.value.phoneNumber;
    this.staffForm.value.registeredBy = localStorage.getItem('currentUser');
    this.api.createStaff(this.staffForm.value).subscribe(e => console.log(e))
  }

}
