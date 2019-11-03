import { Component, OnInit } from '@angular/core';
import { ApiService } from '@services/api.service';
import { UserDataService } from '@services/user-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private api: ApiService,
    private data: UserDataService
  ) { }

  ngOnInit() {
  }

}
