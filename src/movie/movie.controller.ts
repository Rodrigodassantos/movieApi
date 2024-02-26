import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { MovieService } from './movie.service';
import { GetMovieDto } from './dto/get-movie.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('movie')
@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  async findOne(@Query('title') title: string): Promise<GetMovieDto> {
    return this.movieService.getMovie(title);
  }

}
