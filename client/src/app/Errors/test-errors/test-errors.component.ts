import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test-errors',
  templateUrl: './test-errors.component.html',
  styleUrls: ['./test-errors.component.css']
})
export class TestErrorsComponent implements OnInit {

  baseURL = 'https://localhost:5001/api/';
  validationErrors: string[] = [];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }



  get400Error(){
    this.http.get(this.baseURL + 'buggy/bad-request').subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }

  get400ValidationError(){
    this.http.post(this.baseURL + 'Account/register', {}).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
        this.validationErrors = err;
      }
    )
  }

  get401Error(){
    this.http.get(this.baseURL + 'buggy/auth').subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }

  get404Error(){
    this.http.get(this.baseURL + 'buggy/not-found').subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }



  get500Error(){
    this.http.get(this.baseURL + 'buggy/server-error').subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }


}
