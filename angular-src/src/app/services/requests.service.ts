import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class RequestsService {

  constructor(
    private http: Http,
  ) { }

  newDelivery(newDelivery){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/deliveries/setDeliveries',newDelivery, {headers:headers}).
    map(res => res.json());
  }

  getAllDeliveries(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/deliveries/getDeliveries', {headers: headers}).
    map(res => res.json());
  }

  checkAddress(address){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyD-lVlq6pN3CAA8vc7nj0kzEMhHt334ycI&address='+ address).
    map(res => res.json());
  }

  deleteAllDeliveries(){
    return this.http.delete('http://localhost:3000/deliveries/deleteDeliveries').
    map(res => res.json());
  }

  
}
