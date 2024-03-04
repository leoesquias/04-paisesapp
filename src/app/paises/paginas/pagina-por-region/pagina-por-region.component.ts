import { Component } from '@angular/core';
import { IPais } from '../../interfaces/ipais';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-pagina-por-region',
  templateUrl: './pagina-por-region.component.html',
  styles: ``
})
export class PaginaPorRegionComponent {
  public paises: IPais[]=[];
  constructor(private PaisesService: PaisesService){}

  ue_buscarPorRegion(region:string):void{
      this.PaisesService.uf_buscarRegion(region)
    .subscribe(paises=>{
      this.paises = paises;
    })
  }
}
