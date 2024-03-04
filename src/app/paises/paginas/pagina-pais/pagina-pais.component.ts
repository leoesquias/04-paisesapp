import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPais, Idd } from '../../interfaces/ipais';
import { PaisesService } from '../../services/paises.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-pagina-pais',
  templateUrl: './pagina-pais.component.html',
  styles: ``
})
  export class PaginaPaisComponent implements OnInit {

    public pais?: IPais;
    constructor (
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private paisesService: PaisesService,

      ){}

    ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({idpais}) => this.paisesService.uf_buscarPaisPorId(idpais))
      )
      .subscribe( (pais) => {
        if (!pais){
          return this.router.navigateByUrl('');
        }
        ///console.log('TENEMOS UN PAIS')
        return this.pais = pais;


    } );
    }
    uf_buscarPais(idpais: string){
    this.paisesService.uf_buscarPaisPorId(idpais)
    .subscribe(pais => {
      console.log({pais})
    });
  }
}
