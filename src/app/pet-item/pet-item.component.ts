import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Pet } from '../models/pet.model';
import { AnimalAdoptionAPIService } from '../animal-adoption-apiservice.service';

@Component({
  selector: 'app-pet-item',
  templateUrl: './pet-item.component.html',
  styleUrls: ['./pet-item.component.css']
})
export class PetItemComponent implements OnInit {
  @Input() isAskingForAdopterName = false;
  @Input() animal!:Pet;
  adopterName = "";

  constructor(private animalAdoptionAPIService: AnimalAdoptionAPIService) { }

  ngOnInit(): void {
  }

  askForAdopterName() {
    this.isAskingForAdopterName = true;
  }

  submit(adopterName: string) {
    console.log(`animal name: ${this.animal.name}, animal id: ${this.animal.id}, adopter name: ${adopterName}`);

    this.isAskingForAdopterName = false;
    this.animal.available = false;

    this.animalAdoptionAPIService.adopt(this.animal.id, adopterName).subscribe(result => {
      console.log(result);
    })
  }
}