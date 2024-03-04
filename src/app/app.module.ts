import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { PaginaPorCapitalComponent } from './paises/paginas/pagina-por-capital/pagina-por-capital.component';
import { PaginaPorPaisComponent } from './paises/paginas/pagina-por-pais/pagina-por-pais.component';
import { PaginaPorRegionComponent } from './paises/paginas/pagina-por-region/pagina-por-region.component';
import { PaginaPaisComponent } from './paises/paginas/pagina-pais/pagina-pais.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
