import { Hero } from '../hero';
import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes:Hero[];
// hero: Hero={
//   id:1,name:'windstorm'
// };

selectedHero : Hero;
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }
getHeroes():void{
  this.heroService.getHeroes().subscribe(heroes=>this.heroes=heroes);
}
  onSelect (hero:Hero):void{
    this.selectedHero = hero;
  }

}
