import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-news',
  templateUrl: './single-news.component.html',
  styleUrls: ['./single-news.component.css']
})
export class SingleNewsComponent implements OnInit {
  @Input() article: {}

  constructor() { }

  ngOnInit() {
  }

}
