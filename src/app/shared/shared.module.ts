import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PaginaPrincipalComponent } from './paginas/pagina-principal/pagina-principal.component';
import { AcercaDeLaPaginaComponent } from './paginas/acerca-de-pagina/acerca-de-pagina.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { LoadindSpinnerComponent } from './components/loadind-spinner/loadind-spinner.component';


@NgModule({
  declarations: [
    AcercaDeLaPaginaComponent,
    ContactoComponent,
    LoadindSpinnerComponent,
    PaginaPrincipalComponent,
    SearchBoxComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    ],
  exports: [
    AcercaDeLaPaginaComponent,
    ContactoComponent,
    LoadindSpinnerComponent,
    PaginaPrincipalComponent,
    SearchBoxComponent,
    SidebarComponent,

  ]
})
export class SharedModule { }
