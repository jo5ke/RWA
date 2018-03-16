import { MoviesService } from './another-movies.service';

MoviesService.get().then(movies => console.log(movies));