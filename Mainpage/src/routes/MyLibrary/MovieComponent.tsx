import { Key } from "react";
import MovieCard from "./MovieCard";

interface MovieData {
  id: number;
  title: string;
  description: string;
  body: string;
}
interface MovieComponentProps {
  movieInfo: MovieData[];
}
const MovieComponent = ({ movieInfo }: MovieComponentProps) => {
  return (
    <div className="wrapper-profile">
      <div className="container-profile">
        <h1>List of cards</h1>
        <div className="grid grid-three-column">
          {movieInfo.map((curVal:MovieData, id: Key | null | undefined) => {
            return <MovieCard key={id} myData={curVal} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieComponent;