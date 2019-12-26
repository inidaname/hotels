import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { InventoryInfo } from '../../interface/inventory.interface';

@Component({
  selector: 'app-inventory-form',
  templateUrl: './inventory-form.component.html',
  styleUrls: ['./inventory-form.component.scss']
})
export class InventoryFormComponent implements OnInit {

  items: any[];
  @Input() name: string;
  content: FormGroup;
  message: string;
  alertType: string;
  @Input() inventoryHere: boolean;
  @Input() inventory: InventoryInfo;

  constructor(
    public modal: NgbActiveModal,
    private api: ApiService,
    private fb: FormBuilder,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.content = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      quantity: ['', Validators.required],
      image: [''],
      manufacturer: ['', Validators.required],
      valuePrice: ['', Validators.required]
    });
  }

  get f() { return this.content.controls; }

  submitForm() {
    if (this.content.valid) {
      this.spinner.show();
      const obs = this.api.createInventory(this.content.value);
      obs.subscribe((cl: any) => {
        this.inventory = cl.data;
        this.spinner.hide();
        this.alertType = 'success';
        this.message = cl.message;
        this.inventoryHere = true;
      },
        er => {
          this.spinner.hide();
          this.alertType = 'danger';
          this.message = er.error.message;
          this.inventoryHere = false;
          // @TODO: send back data
        });
    }
  }

  close() {
    this.message = null;
  }

}
