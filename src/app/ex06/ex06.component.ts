import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex06',
  templateUrl: './ex06.component.html',
  styleUrls: ['./ex06.component.scss']
})
export class Ex06Component implements OnInit {
  click:boolean = false

  user: any = {
    nome:"",
    cpf:"",
    diaNiver:"",
    senha:"",
  }

  constructor() { }

  ngOnInit(): void {
  }
  cadastrar() {
    if(this.user.nome && this.user.cpf && this.user.diaNiver && this.user.senha){
      this.click = true;
      console.log('Nome:', this.user.nome );
      console.log('CPF:', this.user.cpf );
      console.log('Dia Aniversário:', this.user.diaNiver );
      console.log('Senha:', this.user.senha );
    }
  }
}
