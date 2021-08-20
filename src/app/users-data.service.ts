import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  constructor(private http:HttpClient) { }
  getData()
  {
    let url="https://dev.bookcheap.com.au/api/hotelsearch/hotelroomsearch";
    var requestPayload = {"hotel_id":"2294355","city_id":"22594","rooms":[{"adults":1,"age":[],"children":0,"nationality":20,"residency":20}],"perpagevalue":"10","pagenumber":"0","checkin":"2021-08-23","checkout":"2021-08-24","language":"en","currency":"373","cookie":""};
    return this.http.post(url,requestPayload);
  }
  getImgData()
  {
    let url="https://dev.bookcheap.com.au/api/hotelsearch/finalhotelsearch";
    var requestPayload={"hotel_id":"2294355","city_id":"22594","rooms":[{"adults":1,"age":[],"children":0,"nationality":20,"residency":20}],"perpagevalue":"10","pagenumber":"0","checkin":"2021-08-23","checkout":"2021-08-24","language":"en","currency":"373","cookie":""};
    return this.http.post(url,requestPayload)
  }
  
}

// https://jsonplaceholder.typicode.com/todos/

// https://dev.bookcheap.com.au/api/hotelsearch/finalhotelsearch

