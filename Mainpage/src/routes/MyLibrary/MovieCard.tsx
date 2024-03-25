interface MovieData {
  id: number;
  title: string;
  body: string;
}
interface MovieCardProps {
  myData: MovieData;
}
const MovieCard = ({myData}: MovieCardProps) => {
  const { title, body, id } = myData;
  return (
    <div className="card">
      <div className="card-info">
        <p className="card-id">{id}</p>
        <p>{body.substr(0, 150)}</p>
        <h2>{title.substr(0, 15)}</h2>
      </div>
    </div>
  );
};

export default MovieCard;