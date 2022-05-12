import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex03',
  templateUrl: './ex03.component.html',
  styleUrls: ['./ex03.component.scss']
})
export class Ex03Component implements OnInit {
  arrayList:string[] = [
    'A menina que roubava livros',
    'Nas profundezas do mar sem fim',
    'O Senhor dos Anéis',
    'Armagedom',
    'A Casa do Lago'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
