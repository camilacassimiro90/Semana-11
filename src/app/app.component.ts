import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showModal: boolean = false;

  user: any = {
    nome: "",
    cpf: "",
    email: "",
    nomePet: "",
    idPet: "",

  }

  constructor() { }

  ngOnInit(): void {

  }
  showInformations() {

    this.showModal = true;
  }
}
