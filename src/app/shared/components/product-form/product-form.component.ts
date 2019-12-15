import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '@services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProductInfo } from '@shared/interface';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  items: any[];
  @Input() name: string;
  content: FormGroup;
  message: string;
  alertType: string;
  @Input() productHere: boolean;
  @Input() product: ProductInfo;

  constructor(
    public modal: NgbActiveModal,
    private api: ApiService,
    private fb: FormBuilder,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.content = this.fb.group({
      name: ['', Validators.required],
      productType: ['', Validators.required],
      productDept: [''],
      productImage: [''],
      valuePrice: ['', [Validators.required]],
      manufacturer: ['', Validators.required],
      quantity: ['', Validators.required],
      expiryDate: ['', Validators.required]
    });
  }

  get f() { return this.content.controls; }

  submitForm() {
    console.log(this.content.value);
    if (this.content.valid) {
      this.spinner.show();
      const obs = this.api.createProduct(this.content.value)
      obs.subscribe((cl: any) => {
        this.product = cl;
        this.spinner.hide();
        this.alertType = 'success';
        this.message = cl.message;
        this.productHere = true;
      },
        er => {
          this.spinner.hide();
          this.alertType = 'danger';
          this.message = er.error.message;
          this.productHere = false;
          // @TODO: Send back data
        });
    }
  }

  close() {
    this.message = null;
  }
}
