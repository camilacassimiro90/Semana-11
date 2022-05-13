import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  showModal:boolean = false;

  user: any = {
    nome:"",
    cpf:"",
    email:"",
    nomePet:"",
    idPet:""

  }
  
  constructor() { }

  ngOnInit(): void {

  }
  showInformations(){
    if(this.user.nome && this.user.cpf && this.user.email && this.user.nomePet && this.user.idPet){
      this.showModal = true
      console.log('Nome:', this.user.nome)
    }
  }
}