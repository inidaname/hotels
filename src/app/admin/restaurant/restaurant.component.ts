import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '@services/api.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  mealForm: FormGroup;
  message: any;
  alertType: any;
  sett: boolean;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private spinner: NgxSpinnerService
  ) {
    this.sett = false;
  }

  ngOnInit() {
    this.mealForm = this.fb.group({
      mealName: ['', Validators.required],
      mealDescription: [''],
      mealPrice: ['', Validators.required]
    });
  }

  get f() { return this.mealForm.controls; }

  close() {
    this.message = '';
  }

  createMeal() {
    this.message = '';
    this.spinner.show();
    if (this.mealForm.valid) {
      this.api.createMeal(this.mealForm.value).subscribe((meal: any) => {
        if (meal) {
          this.spinner.hide();
          this.message = 'New meal added to the restaurant';
          this.alertType = 'success';
          this.sett = true;
        }
      }, (e) => {
        if (e) {
          this.spinner.hide();
          this.message = 'Something went wrong check your data';
          this.alertType = 'danger';
        }
      });
    } else {
      this.spinner.hide();
    }
  }

}
