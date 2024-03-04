import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit {
  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe(value =>{
      console.log('debouncer value',value)
    })
  }
  private debouncer:Subject<string>=new Subject<string>();

  @Input()
  public gs_placeholder:string='';

  @Output()
   public onValue= new EventEmitter<string>();

   @Output()
   public ue_onDebounce =new EventEmitter<string>();

   uf_emitValue(value:string):void{
    console.log(value)
        this.onValue.emit(value);
  }
  ue_onKeyPress(searchTerm:string){
     this.debouncer.next(searchTerm);
  }
}
