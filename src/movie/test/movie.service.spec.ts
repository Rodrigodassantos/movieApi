import { Test, TestingModule } from '@nestjs/testing';
import { MovieService } from '../movie.service';
import axios from 'axios';
import { mockData } from './mocks/service.mock'

describe('MovieService', () => {
  let service: MovieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovieService],
    }).compile();

    service = module.get<MovieService>(MovieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getMovieByTitle', () => {
    it('should return movie data', async() => {
      const title = ' Pulp fiction' 

     jest.spyOn(axios, 'get').mockResolvedValue({data: mockData})
      const result = await service.getMovie(title);

      expect(result).toEqual(mockData);
    })

    it('should not return movie data', async() => {
      const title = '' 

      jest.spyOn(axios, 'get').mockRejectedValue(new Error());

      try {
        await service.getMovie(title);
      } catch (error) {
        expect(error.message).toBe('');
      }
    })
  })
});
