interface MovieData {
  id: number;
  title: string;
  body: string;
  author: string;
}
interface MovieCardProps {
  myData: MovieData;
}
const MovieCard = ({myData}: MovieCardProps) => {
  const { title, body, author } = myData;
  return (
    <div className="library-card">
      <div className="library-card-info">
        <div className="library-card-header">
          <h2 className="library-card-title">{title.substr(0, 20)}</h2>
          <h2 className="library-card-author">By. khsdl kahsdl</h2>
          {/* <h2>{author}</h2> */}
        </div>
        <p className="library-card-body">{body.substr(0, 300)}</p>
      </div>
    </div>
  );
};

export default MovieCard;