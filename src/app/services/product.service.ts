import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseurl = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) { }

  addProduct(body:any){
    let url=this.baseurl+ '/product';
    console.log("add product",body)
    return this.http.post(url,body,this.httpOptions);

  }

  getAllProduct(){
    let url=this.baseurl +'/product'
    return this.http.get(url,this.httpOptions);
  }
  getProductbyid(id:any){
    let url=this.baseurl+'/product/'+id
    return this.http.get(url,this.httpOptions);

  }
  updateProduct(id:any,body:any){
    let url=this.baseurl + '/product/'+id
    return this.http.put(url,body,this.httpOptions);
  }
  deleteProduct(id:any){
    let url=this.baseurl +'/product/'+id;
    return this.http.delete(url,this.httpOptions );
  }

}
