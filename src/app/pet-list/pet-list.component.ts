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

  minAge: number = 0;
  maxAge: number = 100;
  type: string = "";
  selectedType: string = "";
  animalList: Array<Pet> = [];
  animalTypes = ["dog", "cat"];

  // adopterName: string;

  constructor(private animalAdoptionAPIService: AnimalAdoptionAPIService) { 
    this.searchAnimals();
  }

  ngOnInit(): void {
  }

  searchAnimals(type?:string, ageMin?: number, ageMax?: number):void {
    console.log(`type: ${type}, minAge: ${ageMin}, maxAge: ${ageMax}`)  

    // reset animaList to an empty array first
    this.animalList = [];

    this.animalAdoptionAPIService.searchAnimals(type, ageMin, ageMax).subscribe(result => {
      // const animalResponse: AnimalResponse = result;
      console.log(result);
      this.animalList = result;
      // console.log("Api test", AnimalResponse);
    });
  }
}
