import {MovieInterface} from "./movie.interface";

export interface ScreeningInterface {
  id: string,
  screeningRoomId: number,
  movieId: string,
  advertisementsDuration: number,
  startDate: Date,
}

export interface ScreeningsInterface {
  movies: MovieInterface[],
  screenings: ScreeningInterface[],
}
