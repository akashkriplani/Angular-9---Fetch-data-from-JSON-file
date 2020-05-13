import { Component, VERSION, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IProducts } from './products.interface';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular ' + VERSION.major;
  response: IProducts;

  constructor(private httpService: HttpClient) { }

  public ngOnInit(): void {
    this.httpService.get<IProducts>('/assets/products.json')
    .subscribe(res => {
      console.log(res);
      this.response = res;
    })
  }
}
