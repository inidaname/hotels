import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '@services/api.service';

@Component({
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  mealForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: ApiService
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
    this.api.createMeal(this.mealForm.value).subscribe(e => console.log(e));
  }

}
