import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  [x: string]: any;
 
  baseUrl:string="http://localhost:3000/";

  httpHeaders:HttpHeaders = new HttpHeaders()
                            .set('content-type','application/json');


  constructor(private http:HttpClient) { }
  getDetailsFromServer(endPoint: string, httpParams: HttpParams = new HttpParams()) {
    let url = this.baseUrl + endPoint;
    
    return this.http.get(url, { 'headers': this.httpHeaders, 'params': httpParams });
  }

   getTopsFromServer(endPoint: string, httpParams: HttpParams = new HttpParams()) {
     let url = this.baseUrl + endPoint;
     return this.http.get(url, { 'headers': this.httpHeaders, 'params': httpParams });
   }
   
  //  getUserFromServer(endPoint: string, httpParams: HttpParams = new HttpParams()) {
  //   let url = this.baseUrl + endPoint;
  //   return this.http.get(url, { 'headers': this.httpHeaders, 'params': httpParams });
  // }
   
   postTopsFromServer(endPoint: string,requestBody:any) {
    let url = this.baseUrl + endPoint;
    return this.http.post(url, requestBody,{ 'headers': this.httpHeaders, });
  }
}
