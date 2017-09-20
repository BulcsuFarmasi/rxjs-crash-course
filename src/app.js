import $ from 'jquery';
import Rx from 'rxjs/Rx';

/*
const source$ = Rx.Observable.interval(1000)
                .take(10)
                .map(v => v * 2);

source$.subscribe(v => { console.log(v) });


const source$ = Rx.Observable.from(['John', 'Tom', 'Shawn'])
    .map(v => v.toUpperCase())
    .map(v => `I am ${v}`);

source$.subscribe(v => { console.log(v) });

    */

function getUser (username) {
    return $.ajax({
        url: `https://api.github.com/users/${username}`,
        dataType: 'jsonp'
    }).promise();
}

Rx.Observable.fromPromise(getUser('Wulip'))
    .map(user => user.data.na,e)
    .subscribe(name => {
        console.log(name);
});