import { Movie } from './movie';
import { MoviesService } from './movies.service';
import { getRandomNumber } from './random-number-service';

const service = new MoviesService;
// service.get(function(filmovi){

// });
const movies = service.get(movies => {
  //  debugger;
  movies.forEach(movie => showMovie(movie));
});

service.get().then( movies =>{
    movies.forEach(movie => showMovie(movie));;
});

/////// moved to MovieService
// const movies = [];
// movies.push(new Movie("Star Wars", 2014, 4.8));
// movies.push(new Movie("Star Wars 2", 2016, 4.5));
// movies.push(new Movie("Matrix", 2017, 2));
// movies.push(new Movie("Inception", 2011, 4.5));

// movies
//     .filter(movie => movie.rating >= 4)
//     .map(movie => movie.title)
//     .forEach(title => document.write(`<p>${title} </p>`))

// document.write('Hello world');

// const sum = movies
//     .map(movie => movie.rating)
//     .reduce((acc, rating) => acc + rating, 0)

// const movies2015 = movies
//     .filter(movie => movie.year < 2015)

// const sum2015 = movies2015
//     .map(movies2015 => movies2015.rating)
//     .reduce((acc, rating) => acc + rating, 0)

// const avg2015 = sum2015 / movies2015.length;

// document.write(`<br> Average score is ${avg2015}`);

function showMovie(movie) {
    const el = document.createElement('div');
    document.body.appendChild(el);
    const { title,year,rating } = movie;
    el.innerHTML = `<h3>Title: ${title}</h3> <br> 
                ${year} <p>${rating} </p>`
}

console.log('boo');

// sekvencijalno
getRandomNumber()
  .then(number => service.getByIndex(number))
  .then(movie => showMovie(movie));

// getRandomNumber().then( service =>{
//   get(movies => {
//     movie => showMovie(movie);
//   });
// });

// niz promisa
Promise.all([
  getRandomNumber(),
  service.get()
]).then( ([ number, movies])  => {
  showMovie(movies[number % movies.length]);
});


// movies.forEach(movie => showMovie(movie));