import { AnimalResponse } from './../models/animal.model';
import { AnimalAdoptionAPIService } from './../animal-adoption-apiservice.service';
import { Component, OnInit } from '@angular/core';
import { Pet } from '../models/pet.model';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  // animalId: number;
  // animalName: string;
  // animalAge: number;
  // animalAvailable: boolean;

  animalList: Array<Pet> = [];

  // adopterName: string;

  constructor(private animalAdoptionAPIService: AnimalAdoptionAPIService) { 
    this.searchAnimals();
  }

  ngOnInit(): void {
  }

  searchAnimals():void {
    this.animalAdoptionAPIService.searchAnimals().subscribe(result => {
      // const animalResponse: AnimalResponse = result;
      this.animalList = result;
      console.log("Api test", AnimalResponse);
    });
  }
}
