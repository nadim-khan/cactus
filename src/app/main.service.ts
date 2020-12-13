import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  api = environment.api;
  constructor( private http: HttpClient) { 
  }

  getDetails() {
    let resp1 = this.http.get(`${this.api}/users?page=1`);
    let resp2 = this.http.get(`${this.api}/posts?page=1`);
    let resp3 = this.http.get(`${this.api}/comments?page=1`);
    return forkJoin([resp1,resp2,resp3]);
  }

  sendComment(data: any) {
    headers: {
    }
    return this.http.post(`${this.api}posts/`+data.userId+`/comments`,data.comment);
  }

}
