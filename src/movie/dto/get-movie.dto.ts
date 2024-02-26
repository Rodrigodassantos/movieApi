import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty} from 'class-validator';

export class GetMovieDto {
  @ApiProperty()
  @IsNotEmpty()
  Title: string;
  
  @ApiProperty()
  @IsNotEmpty()
  Plot: string;

  @ApiProperty()
  @IsNotEmpty()
  Actors: string;

  @ApiProperty()
  @IsNotEmpty()
  imdbRating: string;

  @ApiProperty()
  @IsNotEmpty()
  Poster: string;

}