import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {




createDb() {

  fetch('http://10.0.51.90:8181/sportmanagement-0.0.1-SNAPSHOT/competition/')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      console.log(data[0]);
      console.log("Tournament[0]: ");
      console.log("ID: " + data[0].id);
      console.log("Name: " + data[0].name);
      console.log("Sportart: " + data[0].typeOfSportName);
      console.log("Liga: " + data[0].leagueName);
      console.log("Gebühr: " + data[0].fee);
      console.log("Ort: " + data[0].location);
      console.log("Startdatum: " + data[0].startDate);
      console.log("Enddatum: " + data[0].endDate);
      console.log("Begegnungen: " + data[0].begegnungen);

    });

  const heroes = [
      { id: 1, name: 'Weihnachtsspiele', sportart: 'Fussball' },
      { id: 2, name: 'Silvesterspiele' },
      { id: 3, name: 'Osterturnier' },
      { id: 4, name: 'Meisterschaft' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
