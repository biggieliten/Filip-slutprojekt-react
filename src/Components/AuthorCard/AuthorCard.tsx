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

      <img
        src={`src={https://covers.openlibrary.org/a/olid/${authorKey}-M.jpg}`}
      />

      <p>Top works:{works}</p>
      {workCount && <p>Work Count: {workCount}</p>}
      <ul>
        <p>Life </p>
        {birth ? <li>{birth}</li> : <li>Not mentioned</li>}
        {death && <p>to</p>}
        {death ? <li>{death}</li> : <li>Not mentioned</li>}
      </ul>
    </div>
  );
};
