import { Component } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { IPais } from '../../interfaces/ipais';

@Component({
  selector: 'app-pagina-por-pais',
  templateUrl: './pagina-por-pais.component.html',
  styles: ``
})
export class PaginaPorPaisComponent {
  public paises: IPais[]=[];
  constructor(private paisesService:PaisesService){}

  uf_buscarPorPais(term:string):void{
      this.paisesService.uf_buscarPais(term)
    .subscribe(paises=>{
      this.paises = paises;
    })
  }
}
