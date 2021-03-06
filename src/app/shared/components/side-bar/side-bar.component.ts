import { Component, OnInit, Input } from '@angular/core';
import { NavList } from '@shared/interface';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  @Input() items: NavList[];

  constructor() { }

  ngOnInit() {
  }

}
