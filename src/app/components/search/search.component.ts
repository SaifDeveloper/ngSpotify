import { Component, OnInit } from '@angular/core';
import {SearchService} from "../../services/search.service";
import {Artist} from "../../../../Artist";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchStr:string;
  searchRes: Artist[];

  constructor(private _search:SearchService) {}

  ngOnInit() {

  }

  searchMusic(){
    this._search.searchMusic(this.searchStr)
      .subscribe(res => {
        this.searchRes = res.artists.items;
      })
  }
}
