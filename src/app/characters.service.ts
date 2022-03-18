import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from './models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  retornar(): Observable<Character[]>{
    return this.http.get<Character[]>("http://localhost:3000/characters");
  }

  getById(id: string): Observable<any> {
    return this.http.get(`http://localhost:3000/characters/${id}`)
  }

  create(data: any): Observable<any> {
    return this.http.post(`http://localhost:3000/characters`, data)
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`http://localhost:3000/characters/${id}`, data)
  }

  delete(id: any): Observable<any>{
    return this.http.delete(`http://localhost:3000/characters/${id}`)
  }

}
