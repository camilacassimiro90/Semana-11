import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'semanaOnze';
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