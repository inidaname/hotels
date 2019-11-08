import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '@services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  items: any[];
  @Input() name: string;
  content: FormGroup;

  constructor(
    public modal: NgbActiveModal,
    private api: ApiService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.content = this.fb.group({
      productName: ['', Validators.required],
      productCategory: [''],
      productCat: [''],
      productImage: [''],
      productPrice: ['', [Validators.required]],
      seriel: [''],
      manufacturer: ['', Validators.required],
      quantity: ['', Validators.required],
      manufacturedDate: ['', Validators.required],
      expiryDate: ['', Validators.required]
    });
  }

  get f() { return this.content.controls; }

  submitForm() {
    if(this.content.valid) {
      console.log(this.content.value);
    }
  }
}
