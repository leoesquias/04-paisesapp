import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPais } from '../interfaces/ipais';
import { Observable, catchError, delay, map, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PaisesService {

  private apiUrl:string = 'https://restcountries.com/v3.1'

  constructor(private http: HttpClient) { }

    private uf_getPaisRequest(url:string):Observable<IPais[]>{
      return this.http.get<IPais[]>(url)
      .pipe(
          catchError(() => of([])),
          delay(200),
        );
    }



    uf_buscarPaisPorId(codigo: string): Observable<IPais| null>{
      const url=`${this.apiUrl}/alpha/${codigo}`;
      return this.http.get<IPais[]>(url)
      .pipe(
      map(paises => paises.length  > 0 ? paises[0]:null),
        catchError(() => of(null))
      );

   }

    uf_buscarCapital(qry:string):Observable<IPais[]>{
      const url=`${this.apiUrl}/capital/${qry}`
      return this.uf_getPaisRequest(url);
     }

    uf_buscarPais(qry:string):Observable<IPais[]>{
      const url=`${this.apiUrl}/name/${qry}`
      return  this.uf_getPaisRequest(url);

    }
    uf_buscarRegion(qry:string):Observable<IPais[]>{
      const url=`${this.apiUrl}/region/${qry}`
      return this.http.get<IPais[]>(url)
      .pipe(
        catchError(() => of([]))
      );
    }

}
