import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  urlReq: string = 'http://newsapi.org/v2/'
  apiKey: string = '8d384a8283714c04ab08a38589444eff'
  news: {} = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getNews()
  }

  getNews() {
    this.http.get(
      `${this.urlReq}top-headlines?country=ua&apiKey=${this.apiKey}`
    ).subscribe(resData => {
      this.news = resData['articles']
    })
  }
}
