import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex04',
  templateUrl: './ex04.component.html',
  styleUrls: ['./ex04.component.scss']
})
export class Ex04Component implements OnInit {

  arrayFotos: any = [
 	 {
	    url: "assets/primeiraNeve.jpeg",
	    description:"Minha primeira vez na neve. Schloss Neuschwanstein - Alemanha."
	  },
	  {
	    url: "assets/formatura.jpeg",
	    description:"Na colação de grau do curso Letras - Português/Alemão. Unesp."
	  },
	  {
	    url: "assets/metallica.jpeg",
	    description:"Meu primeiro show da minha banda preferida."
	  },
	  {
	    url: "assets/scorpions.jpeg",
	    description:"Meu primeiro show com banda internacional."
	  },
	  {
	    url: "assets/buenosAires.jpeg",
	    description:"Minha primeira viagem ao exterior na América do Sul"
	  }
	]
 
  constructor() { }

  ngOnInit(): void {
  }
}
  