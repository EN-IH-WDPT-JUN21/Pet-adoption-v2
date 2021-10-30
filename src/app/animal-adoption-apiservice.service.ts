import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnimalResponse } from './models/animal.model';

@Injectable({
  providedIn: 'root'
})
export class AnimalAdoptionAPIService {
  private readonly baseUrl: string = 'http://localhost:8080/animal'; 

  constructor(private http: HttpClient) { }

  searchAnimals(type?:string, ageMin?: number, ageMax?: number): Observable<any> {

    let httpParams = new HttpParams();
    if (type) httpParams = httpParams.append('type', type);
    if (ageMin) httpParams = httpParams.append('ageMin', ageMin);
    if (ageMax) httpParams = httpParams.append('ageMax', ageMax);
    
  
  if (!(type == "" && ageMin == null && ageMax == null)){
      const httpOptions = {
        params: httpParams
      };
      return this.http.get<AnimalResponse[]>(this.baseUrl, httpOptions);
    }
    return this.http.get<AnimalResponse[]>(this.baseUrl);  
  }
}