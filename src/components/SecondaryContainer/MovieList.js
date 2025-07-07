import MovieCard from "./MovieCard";
const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div>
      <div>{title}</div>
      <div>
        <MovieCard posterPath={movies && movies[0]?.poster_path} />
      </div>
    </div>
  );
};

export default MovieList;
