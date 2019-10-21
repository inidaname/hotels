import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-highlight',
  templateUrl: './top-highlight.component.html',
  styleUrls: ['./top-highlight.component.scss']
})
export class TopHighlightComponent implements OnInit {

  @Input() item: any;

  constructor() { }

  ngOnInit() {
  }

}
