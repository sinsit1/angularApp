import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.scss']
})
export class IncrementadorComponent implements OnInit {

  @Input() progreso: number = 50;
  @Input() leyenda = 'Leyenda';
  @Output() cambioValor: EventEmitter<number> = new EventEmitter<any>();
  @ViewChild('progress') progress: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onChange(value: number) {

    if (value >= 100) {
      this.progreso = 100;
    } else if (value <= 0) {
      this.progreso = 0
    } else {
      this.progreso = value;
    }
    this.progress.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);
  }

  cambiarValor(valor: number) {
    if ((this.progreso + valor) >= 100) return this.progreso = 100;
    if ((this.progreso + valor) <= 0) return this.progreso = 0;
    this.progreso = this.progreso + valor;
    this.cambioValor.emit(this.progreso);
    this.progress.nativeElement.focus();
  }
}
