import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '@services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

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
    private fb: FormBuilder,
    private spinner: NgxSpinnerService
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
      this.spinner.show();
      const obs = this.api.createProduct(this.content.value)
      obs.subscribe(cl => {
        console.log(cl)
        this.spinner.hide();
      })
    }
  }
}
