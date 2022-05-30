import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex09',
  templateUrl: './ex09.component.html',
  styleUrls: ['./ex09.component.scss']
})
export class Ex09Component implements OnInit {
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
