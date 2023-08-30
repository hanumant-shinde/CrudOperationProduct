import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  baseurl = "http://localhost:3000/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) { }
  postDataToserver(endpoint: string, body: any) {
    const url = this.baseurl + endpoint;
    console.log("url", url);
  
    return this.http.post(url, body, this.httpOptions)
      .pipe(
        catchError(error => {
          console.error('An error occurred:', error);
          return throwError('Something went wrong.');
        })
      );
  }
  
  getDataToserver(endpoint: string){
    const url = this.baseurl + endpoint;
    return this.http.get(url, this.httpOptions)
      .pipe(
        catchError(error => {
          console.error('An error occurred:', error);
          return throwError('Something went wrong.');
        })
      );
  }

   // HttpClient API get() method => Fetch products list
   getEmployees() {
    return this.http
      .get(this.baseurl + '/products');
  }
  // HttpClient API get() method => Fetch employee
  getproduct(id: any) {
    return this.http
      .get(this.baseurl + '/products/' + id);
  }
  // HttpClient API post() method => Create employee

  createproduct(employee: any){

    return this.http.post(this.baseurl + '/products',
        JSON.stringify(employee),
        this.httpOptions
      );
  }
  // HttpClient API put() method => Update employee

  updateEmployee(id: any, employee: any) {
    return this.http
      .put(
        this.baseurl + '/products/' + id,
        JSON.stringify(employee),
        this.httpOptions
      );
  }
  // HttpClient API delete() method => Delete employee
  deleteEmployee(id: any) {
    return this.http
      .delete(this.baseurl + '/products/' + id, this.httpOptions);
  }

  
}


