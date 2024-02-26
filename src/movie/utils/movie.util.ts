import { GetMovieDto } from "../dto/get-movie.dto"

export function formatMovie(data: any):GetMovieDto{

  const decorator = {
    Title: data.Title,
    Plot: data.Plot,
    Actors: data.Actors,
    imdbRating: data.imdbRating,
    Poster: data.Poster
  }

  return decorator
}