import * as Rxjs from 'rxjs';
import {interval} from 'rxjs/observable/interval';
import { Subject } from 'rxjs';

const subject$ = new Subject();

const sub1 = interval(700)
    .map(x => x*x)
    .filter(x => x > 40)
    .takeUntil(subject$)
    .subscribe(x => console.log(x));



// const observable1 = Rxjs.Observable.create(generator => {
//     setInterval( () => {
//     generator.next(parseInt(Math.random()*10));
//     console.log('subscribe');
//         },1000);
// })
// .filter(broj => broj >=30 )
// .subscribe(num => {
//     console.log(num);
//     div.innerHTML = num;    
// })

const div = document.createElement("div");
document.body.appendChild(div);
const button = document.createElement("button");
document.body.appendChild(button);
button.innerHTML = "Click";

button.onclick = () => {
    subject$.next();
    subject$.complete();
}

// fromEvent(button,'click')
// .subscribe(ev => {
//     subject$.next();
//     subject$.complete();
// });




