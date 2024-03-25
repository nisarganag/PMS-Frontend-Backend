import MovieCard from "./MovieCard";

const MovieComponent = ({ movieInfo }) => {
  return (
    <div className="wrapper-profile">
      <div className="container-profile">
        <h1>List of cards</h1>
        <div className="grid grid-three-column">
          {movieInfo.map((curVal, id) => {
            return <MovieCard key={id} myData={curVal} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieComponent;