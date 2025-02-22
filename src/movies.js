// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    
    const allDirectors = moviesArray.map(function(movie) {
        return movie.director
      })
       return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  
    const dramaStevyMovies = moviesArray.filter(function(movie){
        if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")) {
    return movie;
     }
    })
    return dramaStevyMovies.length
    }

    

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
    if (moviesArray.length == 0){
        return 0
    }
    let totalScore = moviesArray.reduce(function(acc, val){
        if(val.score==undefined || val.score == ""){
            return acc
        }
        return acc + val.score;
        }, 0)
        let avgScore = totalScore / moviesArray.length;
        return Number(avgScore.toFixed(2));
    }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const dramaMovies = moviesArray.filter(function(movie){
        if (movie.genre.includes("Drama")) {
    return movie;
     }
    })
    if (dramaMovies.length === 0) {
        return 0
    } 
        const score = dramaMovies.reduce(function(acc, val){
            return acc + val.score
        }, 0)
    
    
    return +((score / dramaMovies.length).toFixed(2))

    
    
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return moviesArray
    .slice()
    .sort(function(a, b){
        return a.year - b.year || a.title.localeCompare(b.title)
    })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return moviesArray
    .map(function(movie){
        return movie.title
    })
    .sort()
    .slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
