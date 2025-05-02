import { Injectable } from '@angular/core';
import { Promocao } from '../types/types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PromocaoService {

  private apiUrl: string = environment.apiUrl

  constructor(
    private HttpClient:HttpClient
  ) { }
  listar() : Observable<Promocao[]>{
    return this.HttpClient.get<Promocao[]>(`${this.apiUrl}/promocoes`);
  }
}
