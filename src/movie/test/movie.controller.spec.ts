import { Test, TestingModule } from '@nestjs/testing';
import { MovieController } from '../movie.controller';
import { MovieService } from '../movie.service';
import { mockData } from './mocks/service.mock'
import { GetMovieDto } from '../dto/get-movie.dto';
import axios from 'axios';

describe('MovieController', () => {
  let controller: MovieController;
  let service: MovieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MovieController],
      providers: [MovieService],
    }).compile();

    controller = module.get<MovieController>(MovieController);
    service = module.get<MovieService>(MovieService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getMovieWithTitle', () => {
    it('should return movie data', async () => {
      const title = 'Pulp Fiction';
      const movieData: GetMovieDto = mockData

     const call = jest.spyOn(axios, 'get').mockResolvedValue({data: movieData})

      const result = await controller.findOne( title );

      expect(call).toHaveBeenCalledTimes(1)
      expect(result).toEqual(movieData);
    });
  });
});
