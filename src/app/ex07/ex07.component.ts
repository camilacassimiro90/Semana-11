import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex07',
  templateUrl: './ex07.component.html',
  styleUrls: ['./ex07.component.scss']
})
export class Ex07Component implements OnInit {
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
      
      console.log('Nome:', this.user.nome );
      console.log('CPF:', this.user.cpf );
      console.log('Dia Aniversário:', this.user.diaNiver );
      console.log('Senha:', this.user.senha );
    }
  }
}
