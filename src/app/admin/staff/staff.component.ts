import { Component, OnInit } from '@angular/core';
import { ApiService } from '@services/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { StaffService } from '@services/staff.service';
import { StaffListComponent } from '@components/staff-list/staff-list.component';

@Component({
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  staffForm: FormGroup;
  message: any;
  alertType: string;
  component: StaffListComponent;
  whatbring: boolean;

  constructor(
    private api: ApiService,
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private staff: StaffService
  ) {
    this.whatbring = false;
  }

  ngOnInit() {
    this.staffForm = this.fb.group({
      fullName: ['', Validators.required],
      email: [''],
      phoneNumber: ['', Validators.required],
      userType: ['', Validators.required]
    });
  }

  get f() { return this.staffForm.controls; }

  createStaff() {
    if (this.staffForm.valid) {
      this.message = '';
      this.spinner.show('create',
        {
          type: 'ball-scale-pulse',
          size: 'large',
          bdColor: 'rgba(105,105,105, .3)',
          color: 'grey',
          fullScreen: true
        }
      );

      this.staffForm.value.password = this.staffForm.value.phoneNumber;
      this.staffForm.value.registeredBy = localStorage.getItem('currentUser');
      const createUser = this.api.createStaff(this.staffForm.value).subscribe(e => {
        if (e) {
          this.message = e.message;
          this.alertType = 'success';
          this.spinner.hide('create');
          this.staff.updateUser();
          this.whatbring = true;
          this.staffForm.reset();
          createUser.unsubscribe();
        }
      },
        err => {
          this.message = err.message;
          this.alertType = 'danger';
          this.spinner.hide('create');
          this.staff.updateUser();
          this.whatbring = true;
          this.staffForm.reset();
          createUser.unsubscribe();
        });
    }
  }

  close() {
    this.message = '';
  }

}
