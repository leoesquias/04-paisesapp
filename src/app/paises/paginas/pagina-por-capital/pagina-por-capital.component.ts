import { Component } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { IPais } from '../../interfaces/ipais';

@Component({
  selector: 'paises-pagina-por-capital',
  templateUrl: './pagina-por-capital.component.html',
  styles: []
})
export class PaginaPorCapitalComponent {

  public paises: IPais[]=[];
  public isLoadind: boolean=false;
  constructor(private paisesService:PaisesService){}

  uf_buscarPorCapital(term:string):void{
   /* console.log('Desde PaginaPorCapital')*/
    console.log('leo'+{term});

    this.isLoadind=true

    this.paisesService.uf_buscarCapital(term)
    .subscribe(paises=>{
      this.paises = paises;
      this.isLoadind=false
    })
  }
}
