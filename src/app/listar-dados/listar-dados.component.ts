import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { GetDataApiService } from '../compartilhados/get-data-api.service';

@Component({
  selector: 'app-listar-dados',
  templateUrl: './listar-dados.component.html',
  styleUrls: ['./listar-dados.component.css'],
})

// componente para mostrar a tabela na tela e realizar ordenação
export class ListarDadosComponent implements OnInit {

  listaImoveis: any = [];

  constructor(private apiService : GetDataApiService) { }

  // ao inicializar o componente, chama o método para preencher a lista
  ngOnInit(): void {
    this.getImoveisList();
  }

  // utiliza o serviço para consumir os dados da api e preencher a listaImoveis
  getImoveisList(){
    this.apiService.getImoveis().subscribe((data: {}) => {
      this.listaImoveis = data;
    })
  }

  // algoritmo de ordenação: recebe uma função de comparação entre os elementos da lista
  private sortElements(comp: any){
    for (let i = 0; i < this.listaImoveis.length-1; i++){
      for (let j = i; j < this.listaImoveis.length; j++){
        if (comp(this.listaImoveis[i], this.listaImoveis[j]) < 0){
          var aux = this.listaImoveis[i];
          this.listaImoveis[i] = this.listaImoveis[j];
          this.listaImoveis[j] = aux;
        }
      }
    }
  }

  // Chama a função de ordenação implementando a função de comparação
  // Recebe um atributo da tebela dentro de planta para ordenar, 
  // e o valor '-1' ou '1' para definir a ordem
  sortByInsidePlanta(param: string, order: number){
    this.sortElements((a: any, b: any) => {
      var valueElementA = a.planta && a.planta[param] ? a.planta[param] : Infinity*order;
      var valueElementB = b.planta && b.planta[param] ? b.planta[param] : Infinity*order;

      return valueElementA < valueElementB ? 1*order : -1*order;
    });
  }

  // Chama a função de ordenação implementando a função de comparação
  // Recebe um atributo "primitivo" da tebela para ordenar, 
  // e o valor '-1' ou '1' para definir a ordem
  sortBy(param: string, order: number){
    this.sortElements((a: any, b: any) => {
      return a[param] < b[param] ? 1*order : -1*order;
    })
  }

  
  

}
