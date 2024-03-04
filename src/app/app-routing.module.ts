import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './shared/paginas/pagina-principal/pagina-principal.component';
import { AcercaDeLaPaginaComponent } from './shared/paginas/acerca-de-pagina/acerca-de-pagina.component';
import { ContactoComponent } from './shared/paginas/contacto/contacto.component';

const routes: Routes = [
  // {
  //   path:'',
  //   component:PaginaPrincipalComponent
  // },
  {
    path:'acerca',
    component:AcercaDeLaPaginaComponent
  },
  {
    path:'contacto',
    component:ContactoComponent},
    {
      path:'paises',
      loadChildren:()=>import('./paises/paises.module').then(m=>m.PaisesModule),
    },
  {
    path:'**',
    // redirectTo:''
   // redirectTo:'paises/por-capital'
   //si la rura y TIENE UNo por defecto
   redirectTo:'paises'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
