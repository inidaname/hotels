import { Component, OnInit } from '@angular/core';
import { AdminApiService } from '@services/admin-api.service';

@Component({
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(
    private api: AdminApiService
  ) { }

  ngOnInit() {
    this.api.getAccounts().subscribe(er => console.log(er));
    this.api.getRestaurant().subscribe(er => console.log(er));
  }

}
