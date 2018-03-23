import * as Rxjs from 'rxjs';
import {interval} from 'rxjs/observable/interval';
import { parse } from 'url';
const niz = [];

function generateNumber(){
    setInterval( () => {
        niz.push(parseInt(Math.random()*10));
        console.log(niz);
    },100);
}

// generateNumber();

const div = document.createElement("div");
document.body.appendChild(div);

const observable1 = Rxjs.Observable.create(generator => {
    setInterval( () => {
    generator.next(parseInt(Math.random()*10));
        },100);
})
.subscribe(num => {
    console.log(num);
    div.innerHTML = num;
});

const button = document.createElement("button");
document.body.appendChild(button);
button.innerHTML = "Stop";
button.onclick = () => observable1.unsubscribe();


// mora da se importuje
// interval pravi seed random brojeva
interval(700)
.map( num => parseInt(Math.random()*10))
.take(5)
.subscribe((num) => {
    console.log("from interval",num);
});

