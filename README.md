This repository is created in order to practice different concepts learned while taking [Rethinking Asynchronous Javascript] (https://frontendmasters.com/courses/rethinking-async-js/) course on [Frontend masters] (https://frontendmasters.com/)

####Problem
* Request all 3 files at the same time (in "parallel").
* Render them ASAP (don't just blindly wait for all to finish loading)
* BUT, render them in proper (obvious) order: "file1", "file2", "file3".
* After all 3 are done, output "Complete!”.

####Exercises:
1. Exercise 1 - Using Callback Technique.
2. Exercise 2 - Using Thunks Technique.
3. Exercise 3 - Using Promises Technique.
4. Exercise 4 - Using map/reduce, promises and array of files.
5. Exercise 5 - Using [Asynquence] (https://github.com/getify/asynquence) library by Kyle Simpson.
6. Exercise 6 - Using map/reduce, asynquence and array of files.
7. Exercise 7 - Using Generators.
8. Exercise 8 - Using Observables with either asynquence or RxJS.
9. Exercise 9 - Using CSP channel concurrency.

Exercise 10 - Tale of three lists to practice Observables and CSP in more depth.

####Install and execute:
```
npm install         // To install dependencies
node ex1/ex1.js     // To run a file.
```
