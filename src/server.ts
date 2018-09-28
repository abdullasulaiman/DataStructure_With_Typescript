import LinkedList from "./dsalgo/linked-list/LinkedList";
import Set from "./dsalgo/sets/Set";

// const express = require('express');

// const app = new express();
// app.get('/', (req, res) => {
//     res.send('Hi');
// });

// app.listen(3000, ()=> { 
//     console.log('Server ready');
// });

// process.on('SIGTERM', () => {
//     console.log('Process Terminated');
// })

// process.kill(process.pid, 'SIGTERM');

// console.log(process.env.NODE_ENV);

// console.log(process.argv)
// console.log(process.argv.splice(2)[0]);
// process.argv.forEach(( val, index ) =>  console.log(`${index} : ${val}`))

// const x = 1
// const y = 2
// const z = 3
// console.count('The value of x is ' + x + ' and has been checked .. how many times?')
// console.count('The value of x is ' + x + ' and has been checked .. how many times?')
// console.count('The value of x is ' + x + ' and has been checked .. how many times?')
// console.count('The value of y is ' + y + ' and has been checked .. how many times?')

// const function2 = () => console.trace()
// const function1 = () => function2()
// function1()

// console.time('Loop Time');
// for(var i = 0; i < 10000000000; i ++) {
// }
// console.timeEnd('Loop Time');

// coloring the output
// console.log('\x1b[33m%s\x1b[0m', 'hi!')

// Creating a progress bar
// const ProgressBar = require('progress')
// const bar = new ProgressBar(':bar', { total: 100 })
// const timer = setInterval(() => {
//   bar.tick(1)
//   if (bar.complete) {
//     clearInterval(timer)
//   }
// }, 100)

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// readline.question(`What's your name?`, (name) => {
//     console.log(`Hi ${name}!`)
//     readline.question(`What's do live?`, (name) => {
//         console.log(`${name} is a nice place!`)
//         readline.question(`What's your age?`, (name) => {
//             console.log(`you are still young at ${name}!`)
//             readline.close()
//         })
//     })
// })

// const linkedList  = new LinkedList();
// linkedList.append(10);
// linkedList.append(20);
// linkedList.append(30);
// linkedList.append(40);
// console.log(linkedList.toString());
// console.log('indexOf 30 is ', linkedList.indexOf(30));
// console.log('size ', linkedList.indexOf(30));
// console.log('getHead ', linkedList.getHead())

const set:Set = new Set();
set.add(1);
set.add(2);

const set2:Set = new Set();
set2.add(1);
set2.add(2);
set2.add(5);


console.log(set.values());
console.log('Union ', set.union(set2));
console.log('Intersection ', set.intersection(set2));


