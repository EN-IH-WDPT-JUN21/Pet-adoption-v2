import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Pet } from '../models/pet.model';

@Component({
  selector: 'app-pet-item',
  templateUrl: './pet-item.component.html',
  styleUrls: ['./pet-item.component.css']
})
export class PetItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() animal!:Pet;
}
