import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-carrosel',
  templateUrl: './carrosel.component.html',
  styleUrls: ['./carrosel.component.scss']
})
export class CarroselComponent implements OnInit, OnDestroy {

  timerSubs!: Subscription

  @Input() imagens: string[] = []

  private _indexImagemAtiva: number = 0;

  get indexImagemAtiva(){
    return this._indexImagemAtiva;
  }

  set indexImagemAtiva(value: number) {
    this._indexImagemAtiva =
      value < this.imagens.length ? value : 0;
  }

  ngOnDestroy(): void {
    this.pararTimer();
  }


  ngOnInit(): void {
  this.iniciarTimer()
  }

  iniciarTimer(): void {
    this.timerSubs = timer(5000).subscribe(()=> {
      this.ativarImagem(
        this.indexImagemAtiva + 1
      )
    })
  }

  pararTimer(): void {
    this.timerSubs?.unsubscribe();
  }

  ativarImagem(index: number) {
    this.indexImagemAtiva = index;
    this.iniciarTimer();
  }




}
