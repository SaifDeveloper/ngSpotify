import { Component, OnInit } from '@angular/core';
import {SearchService} from "../../services/search.service";
import {Album} from "../../../../Album";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  id:string;
  album:Album[];

  constructor(private _spotifyService:SearchService,
              private _route:ActivatedRoute) { }

  ngOnInit(){
    this._route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this._spotifyService.getAlbum(id)
          .subscribe(album => {
            this.album = album;
          })
      })
  }

}
