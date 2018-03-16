import { Movie } from './movie';

export class MoviesService{

    constructor() {
        this.movies = [];

        this.movies.push(new Movie("Star Wars", 2014, 4.8));
        this.movies.push(new Movie("Star Wars 2", 2016, 4.5));
        this.movies.push(new Movie("Matrix", 2017, 2));
        this.movies.push(new Movie("Inception", 2010, 4.5));
    }

    get2(cbFunc) {
        setTimeout( () => cbFunc(this.movies), 2000);
     //   return this.movies;
        console.log('izlaz iz gettera');
    }

    //promise
    get(){
       return new Promise((resolve,reject) =>{
            setTimeout(() => resolve(this.movies),2000);
        });
    }

    getByIndex(index) {
        index = index % this.movies.length;
        return new Promise((resolve,reject) =>{
            setTimeout(() => resolve(this.movies[index]),2000);
        });
    }


}