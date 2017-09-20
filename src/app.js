import $ from 'jquery';
import Rx from 'rxjs/Rx';

console.log('RxJS Boiler Running...');

const btn = $('#btn');

const btnStream$ = Rx.Observable.fromEvent(btn, 'click');

btnStream$.subscribe(
    function (e) {
        console.log(e.target.innerHTML);
    },
    function (err) {
        console.log(err);
    },
    function () {
        console.log('Completed');
    }
)