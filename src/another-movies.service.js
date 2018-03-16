export class MoviesService{
    static get(){
        return fetch("http://localhost:3000/movies")
        .then(response => response.json());

    }
}