import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AppService } from '../app.service'
import { forEach, max, map, get, sortBy } from 'lodash'

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  id: string
  game: any
  players: any
  rounds: any
  dataLoaded = false

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _appService: AppService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('gameId');
    this._appService.getGameById(this.id).subscribe(game  => {
      this.game = game
      this.players = sortBy(game.players, (player) => { return player.index })
      this.rounds = sortBy(game.rounds, (round) => { return round.index })
      this.dataLoaded = true
    })
  }
}
