const movies = [
  {
    title: "Inception",
    year: 2010,
    rating: 8.8,
    genre: "Sci-Fi",
  },
  {
    title: "Interstellar",
    year: 2014,
    rating: 8.6,
    genre: "Sci-Fi",
  },
  {
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    genre: "Action",
  },
  {
    title: "The Godfather",
    year: 1972,
    rating: 9.2,
    genre: "Crime",
  },
  {
    title: "The Shawshank Redemption",
    year: 1994,
    rating: 9.3,
    genre: "Drama",
  },
  {
    title: "Avengers: Endgame",
    year: 2019,
    rating: 8.4,
    genre: "Action",
  },
  {
    title: "The Room",
    year: 2003,
    rating: 3.7,
    genre: "Drama",
  },
];

// const getTopRatedMovies = (movies) => {
//   const TopRatedMovies = movies.filter((ele) => ele.rating >= 9);
//   return TopRatedMovies;
// };
// console.log(getTopRatedMovies(movies));

// const getMovieTitles = (movies) => {
//   const MovieTitles = movies.map((ele) => ele.title);
//   return MovieTitles;
// };
// console.log(getMovieTitles(movies));

// const getAverageRating = (movies,genre) => {
//   const filterdmovies = movies.filter((ele) => ele.genre == genre);
//   const sum=filterdmovies.reduce((acc,ele)=>acc+ele.rating,0)
//   return sum/filterdmovies.length
// };

//  console.log(getAverageRating(movies,"Sci-Fi"));

const getTopRatedMovieTitles = (movies) => {
  const TopRatedMoviestitle = movies.filter((ele) => ele.rating >= 9);
  const MovieTitles = TopRatedMoviestitle.map((ele) => ele.title);

  return MovieTitles;
};
console.log(getTopRatedMovieTitles(movies));
