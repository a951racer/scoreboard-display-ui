import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  gameList = []
  
  constructor(private _appService: AppService) { }

  ngOnInit() {
    this._appService.list().subscribe(gameList  => {
      this.gameList = gameList;
      console.log(gameList)
    })
  }

}
