import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '@services/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { InventoryInfo } from '@shared/interface';

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
      stockName: [''],
      description: [''],
      quantity: [''],
      department: [''],
      condition: [''],
      serialNumber: [''],
      image: [''],
      manufacturer: ['']
    })
  }

  get f() { return this.content.controls; }

}
