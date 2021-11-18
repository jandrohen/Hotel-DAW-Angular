import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IBlog} from "./blog.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  API_URL: string = 'http://localhost/empleados/';

  constructor(private httpClient:HttpClient) {

  }

  getListPosts():Observable<IBlog[]> {
    return this.httpClient.get<IBlog[]>(this.API_URL);
  }
}
