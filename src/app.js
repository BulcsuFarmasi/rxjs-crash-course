import $ from 'jquery';
import Rx from 'rxjs/Rx';

/*
Rx.Observable.of('Hello')
    .subscribe(v => {
        Rx.Observable.of(`${v} Everyone`)
            .subscribe(v => {console.log(v)});
    })

Rx.Observable.of('Hello')
    .mergeMap(v => Rx.Observable.of(`${v} Everyone`))
    .subscribe(v => {console.log(v)});

*/

function getUser (username) {
    return $.ajax({
        url: `https://api.github.com/users/${username}`,
        dataType: 'jsonp'
    }).promise();
}
/*
const inputSource$ = Rx.Observable.fromEvent($('#input'), 'keyup');

inputSource$.subscribe(e => {
    Rx.Observable.fromPromise(getUser(e.target.value))
        .subscribe(x => {
            $("#name").text(x.data.name);
            $("#blog").text(x.data.blog);
            $("#repos").text(`Public Repos: ${x.data.public_repos}`);
        });
});
*/

const inputSource$ = Rx.Observable.fromEvent($('#input'), 'keyup')
    .map(e => event.target.value)
    .switchMap(v => Rx.Observable.fromPromise(getUser(v)));

inputSource$.subscribe(x => {
    $("#name").text(x.data.name);
    $("#blog").text(x.data.blog);
    $("#repos").text(`Public Repos: ${x.data.public_repos}`);
});