import { Component, OnInit, ViewChild } from '@angular/core';
import { UserDataService } from './shared/services/user-data.service';
import { ApiService } from './shared/services/api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('content', {static: true}) content;

  constructor(
    private data: UserDataService,
    private api: ApiService,
    private spinner: NgxSpinnerService,
    private modal: NgbModal
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    if (localStorage.getItem('currentUser')) {
      this.api.getUserById().subscribe(user => {
        this.spinner.hide();
        return user;
      },
      err => {
        this.spinner.hide();
        this.modal.open(this.content);
      });
    } else {
      this.spinner.hide();
    }
    this.spinner.hide();
  }
}
