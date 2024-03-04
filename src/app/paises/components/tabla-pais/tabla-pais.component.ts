import { Component, Input } from '@angular/core';
import { IPais } from '../../interfaces/ipais';

@Component({
  selector: 'tabla-pais',
  templateUrl: './tabla-pais.component.html',
  styles:[
   `img {width:25px}`]
})
export class TablaPaisComponent {
  @Input()
  public paises:IPais[]=[];
}
