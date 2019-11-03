import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewChecked {

  fullName: string;
  email: string;

  constructor(
    private data: AuthService
  ) { }

  ngOnInit() {
    console.log(this.data.getData());
    if (this.data.getData()) {
      this.fullName = this.data.getData().fullName;
    }
  }

  ngAfterViewChecked() {

  }

}
