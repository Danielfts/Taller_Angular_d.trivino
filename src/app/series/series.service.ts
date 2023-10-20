import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import {Observable} from 'rxjs'
import { Serie } from './serie';


@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(private http:HttpClient) { }

  private apiURL:string = environment.baseUrl;

  getSeries(): Observable<Serie[]>{
    return this.http.get<Serie[]>(this.apiURL);
  }

  
}
