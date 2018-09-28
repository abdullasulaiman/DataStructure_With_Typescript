import fetch from 'node-fetch';
import { Observable, from } from 'rxjs';

const observable = Observable.create(((observer) => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    setTimeout(() => {
        observer.next(4);
        observer.complete();
    }, 1000);
}));

observable.subscribe(
    {
        next: value => console.log('next ', value),
        error: err => console.log('Error ' , err),
        complete: () => console.log('Done '),
    }
);

// Create an array from Observable
const array = [10,20,30];
const observableArray = from(array);
console.log(observableArray);

observableArray.subscribe(value => console.log('Number ', value));



const observablePromise = from(fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json()))

observablePromise.subscribe(
    {
        next: response => console.log('Response out ', response),
        error: error => console.log('Error out ', error),
        complete: () => console.log('complete service called'),
    }
)

