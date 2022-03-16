import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  characters: any = null;
  id: any = null;

  constructor(private _route: ActivatedRoute, private charactersService: CharactersService) { }

  ngOnInit(): void {

    this.id = this._route.snapshot.paramMap.get('id');
    this.charactersService.getById(this.id)
      .subscribe(result => this.characters = result)
  }

}
