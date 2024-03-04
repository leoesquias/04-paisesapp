import { NgModule } from '@angular/core';
import { PaginaPorCapitalComponent } from './paginas/pagina-por-capital/pagina-por-capital.component';
import { PaginaPorPaisComponent } from './paginas/pagina-por-pais/pagina-por-pais.component';
import { PaginaPorRegionComponent } from './paginas/pagina-por-region/pagina-por-region.component';
import { PaginaPaisComponent } from './paginas/pagina-pais/pagina-pais.component';
import { CommonModule } from '@angular/common';
import { PaisesRoutingModule } from './paises-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TablaPaisComponent } from './components/tabla-pais/tabla-pais.component';



@NgModule({
  declarations: [
    PaginaPorCapitalComponent,
    PaginaPorPaisComponent,
    PaginaPorRegionComponent,
    PaginaPaisComponent,
    TablaPaisComponent
  ],
  imports: [
    CommonModule,
    PaisesRoutingModule,
    SharedModule,
  ],
  exports: [],
  providers: [],
})
export class PaisesModule { }
