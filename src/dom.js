import * as Rxjs from 'rxjs';

const button = document.createElement("button");
document.body.appendChild(button);
button.innerHTML = "Click";

const div = document.createElement("div");
document.body.appendChild(div);

//objekat mora da se oivici zagradma kad se vraca (  )  -----  ({ x:ev.screenX, y: ev.screenY}))
Rxjs.Observable.fromEvent(button, "click")
    .map(ev => ({ x:ev.screenX, y: ev.screenY}))
//    .subscribe(ev => console.log(ev));
    .subscribe(coords => div.innerHTML = coords.x + ", " + coords.y);

const input = document.createElement("input");
document.body.appendChild(input);

const url = "http://localhost:3000/movies";
const movieObservables = Rxjs.Observable.fromPromise(
    fetch(url)
    .then(response => response.json())
)
//.subscribe(movies => console.log(movies));
//.subscribe(movies => div.innerHTML = movies[1].title);


// debounce time = ajax search 
Rxjs.Observable.fromEvent(input, "input")
    .debounceTime(500)
    .map(ev => ev.target.value)
    .filter(text => text.length >= 5)
   // .subscribe(text => console.log(text));
    .switchMap( text => moviesObservables)
    .subscribe(movies => console.log(movies));
   // .subscribe( input => div.innerHTML = input);


//moviesObservables.subscribe( movies => console.log(movies));