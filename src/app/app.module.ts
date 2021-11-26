import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// importando o serviço api que fará a requisição
import { GetDataApiService } from './compartilhados/get-data-api.service';

// importando o módulo para fazer requisição http
import { HttpClientModule } from '@angular/common/http';
import { ListarDadosComponent } from './listar-dados/listar-dados.component';

// imports para formatar preco para moeda brasileira
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';


// import de ícones
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    ListarDadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [GetDataApiService,
              {provide: LOCALE_ID, useValue: 'pt'}],
              
  bootstrap: [AppComponent]
})
export class AppModule { }
