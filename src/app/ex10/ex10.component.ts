import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex10',
  templateUrl: './ex10.component.html',
  styleUrls: ['./ex10.component.scss']
})
export class Ex10Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  lista:string = "";
  
  tarefas:string[] = []


  addItem(){
    this.tarefas.push(this.lista)
  }

}
