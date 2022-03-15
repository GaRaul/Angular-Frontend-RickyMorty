import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  @Input() characters: any = [
    {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Disease",
      "gender": "Male",
      "origin": "Earth",
      "location": "Earth",
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    },
    {
      "id": 2,
      "name": "Morty Smith",
      "status": "Alive",
      "species": "Human",
      "gender": "Male",
      "origin": "Citadel of Ricks",
      "location": "Earth",
      "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
    },
    {
      "id": 3,
      "name": "Summer Smith",
      "status": "Alive",
      "species": "Human",
      "gender": "Female",
      "origin": "Earth (Replacement Dimension)",
      "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
    },
    {
      "id": 4,
      "name": "Beth Smith",
      "status": "Dead",
      "species": "Human",
      "gender": "Female",
      "origin": "Earth (Replacement Dimension)",
      "location": "Earth",
      "image": "https://rickandmortyapi.com/api/character/avatar/4.jpeg"
    },
    {
      "id": 5,
      "name": "Jerry Smith",
      "status": "Dead",
      "species": "Ape",
      "gender": "Male",
      "origin": "Earth (Replacement Dimension)",
      "location": "Earth",
      "image": "https://rickandmortyapi.com/api/character/avatar/5.jpeg"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
