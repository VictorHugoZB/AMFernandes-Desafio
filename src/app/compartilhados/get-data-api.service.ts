import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Imovel } from './imovel';

@Injectable({
  providedIn: 'root'
})

// serviço que faz requisição para a API
export class GetDataApiService {

  // guardando o url da API (fonte de dados)
  private urlApi: string = "https://api.estagio.amfernandes.com.br/imoveis";
  
  constructor(private http: HttpClient) { }

  // fazendo a requisição dos dados
  getImoveis(): Observable<Imovel>{
    return this.http.get<Imovel>(this.urlApi, {responseType: 'json'}).pipe(
      retry(1),
      catchError((err) => throwError(err))
    );
  }

}
