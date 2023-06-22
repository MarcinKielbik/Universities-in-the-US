import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { University } from '../interface/university';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  // private apiUrl = 'http://universities.hipolabs.com/search?country=United+Kingdom';
  private apiUrl = 'http://universities.hipolabs.com/search?country=United+States';
  
  constructor(private http: HttpClient) { }

  searchUniversities(): Observable<University[]> {
    return this.http.get<University[]>(this.apiUrl);
  }
}
