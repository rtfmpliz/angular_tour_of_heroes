import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of} from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {
  constructor(public messageService:MessageService) { }
  getHeroes():Observable<Hero[]>{
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
 

}
