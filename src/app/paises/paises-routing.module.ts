import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPorCapitalComponent } from './paginas/pagina-por-capital/pagina-por-capital.component';
import { PaginaPorPaisComponent } from './paginas/pagina-por-pais/pagina-por-pais.component';
import { PaginaPorRegionComponent } from './paginas/pagina-por-region/pagina-por-region.component';
import { PaginaPaisComponent } from './paginas/pagina-pais/pagina-pais.component';


const routes: Routes = [
  {
    path:'por-capital',
    component:PaginaPorCapitalComponent,
  },
  {
    path:'por-pais',
    component:PaginaPorPaisComponent,
  },
  {
    path:'por-region',
    component:PaginaPorRegionComponent,
  },
  {
    path:'por/:idpais',
    component:PaginaPaisComponent,
  },
    {
      path:'**',
      redirectTo:'por-capital'
    }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class PaisesRoutingModule { }
