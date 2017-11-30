import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../../services/cinema.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {

  movie;
  constructor(private cinemaService: CinemaService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params) => {
      this.movie = this.cinemaService.getMovie(Number(params.id));
    });
  }

}
