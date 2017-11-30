import { Component } from '@angular/core';
import { CinemaService } from './services/cinema.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private cinemaService: CinemaService) {

  }
  hello() {
    console.log(this.cinemaService.getMovies());
  }
  hello2() {
    console.log(this.cinemaService.getMovie(3));
  }
}
