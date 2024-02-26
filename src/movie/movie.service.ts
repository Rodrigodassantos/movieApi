import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { formatMovie } from './utils/movie.util';

@Injectable()
export class MovieService {
  
 async getMovie(movie: string) {
  const {data} = await axios.get(`${process.env.MOVIE_URL}?t=${movie}&apikey=${process.env.API_KEY}`);
  const teste = formatMovie(data)
   return  teste

  }
}
