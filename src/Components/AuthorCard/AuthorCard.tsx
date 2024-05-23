import "../AuthorCard/AuthorCard.scss";

export type AuthorCardProps = {
  name?: string;
  key?: string;
  works?: string;
  birth?: string;
  style?: string;
  authorKey?: string;
  death?: string;
  workCount?: number;
};

export const AuthorCard = ({
  name,
  key,
  works,
  birth,
  death,
  authorKey,
  style,
  workCount,
}: AuthorCardProps) => {
  return (
    <div key={key} className={style}>
      <h1>{name}</h1>

      {authorKey ? (
        <img src={`https://covers.openlibrary.org/a/olid/${authorKey}-M.jpg`} />
      ) : (
        <img src="https://media.istockphoto.com/id/1055079680/vector/black-linear-photo-camera-like-no-image-available.jpg?s=612x612&w=0&k=20&c=P1DebpeMIAtXj_ZbVsKVvg-duuL0v9DlrOZUvPG6UJk=" />
      )}

      <p>Top works: {works}</p>
      {workCount && <p>Work Count: {workCount}</p>}
      <ul>
        <p>Born: </p>
        {birth ? <li>{birth}</li> : <li>Not mentioned</li>}
        {death && <p>Dead: </p>}
        {death && <li>{death}</li>}
      </ul>
    </div>
  );
};
