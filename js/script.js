"use strict";

let  numberOfFilms;
function start() {
   numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

   while (numberOfFilms ==  '' || numberOfFilms == null || isNaN(numberOfFilms)) {
     numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
   }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function showMyDB(hidden) {
  if(!hidden){
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3 ; i++){
    let genre = prompt (`Ваш любимый жанр под номером ${i}`,'');
    personalMovieDB.genres[i-1] = genre;
    console.log('done');
  }
}
writeYourGenres();
// function rememberMyFilms() {
//   for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', '');
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//       personalMovieDB.movies[a] = b;
//       console.log('done');
//     } else {
//       console.log('error');
//       i--;
//     }
//   }
// }
// rememberMyFilms();

// function detectPesonalLevel() {
//   if (personalMovieDB.count < 10) {
//    console.log('Вы чайник');
//   } else if (personalMovieDB.count > 10 && personalMovieDB < 30) {
//     console.log ('Вы норм');
//   } else if (personalMovieDB >= 30) {
//     console.log('you are kinoman!');
//   } else {
//     console.log('error');
//   }
  
// }
// rememberMyFilms();
// console.log(personalMovieDB);
const a = prompt('Один из последних просмотренных фильмов?', ''),
  b = prompt('На сколько оцените его?', ''),
  c = prompt('Один из последних просмотренных фильмов?', ''),
  d = prompt('На сколько оцените его?', '');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

// // for (let i = 0; i < 2; i++){
// //   const a = prompt('Один из последних просмотренных фильмов?', ''),
// //   b = prompt('На сколько оцените его?', '');
// //   if (a != null && b != null && a != " " && b != " " && a.length <){
// //     console.log(personalMovieDB)
// //   }
// // }




























// for (let i = 0; i < 2; i++) {
//   const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('На сколько оцените его?', '');
//     if ( a != null && b != null && a != '' && b != '' && a.length < 50  ){
//       personalMovieDB.movies[a] = b;
//       console.log('done');
//     } else {
//       console.log('error');
//       i--; // Возвращает к впоросу в случае не выполнения условий
//     }
// }


// if (personalMovieDB.count < 10) {
//   console.log('Вы чайник');
// } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
//   console.log('Ты обычный киноман');
// } else if (personalMovieDB.count >= 30) {
//   console.log('Бешенный киноман');
// } else {
//   console.log('Ошибка');
// }



// console.log(personalMovieDB);