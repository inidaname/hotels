import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  mealForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.mealForm = this.fb.group({
      mealName: ['', Validators.required],
      mealType: ['', Validators.required],
      mealNumber: ['', Validators.required],
      mealDescription: [''],
      mealPrice: ['', Validators.required]
    });
  }

  get f() { return this.mealForm.controls; }

  createMeal() {
    console.log(this.mealForm.value);
  }

}
