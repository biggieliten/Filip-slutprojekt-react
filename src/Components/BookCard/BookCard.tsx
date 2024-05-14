type BookCardProps = {
  title: string;
  cover: any;
  author: any;
  style: string;
  publishDate: number;
  avgRating: number;
  review?: string;
  key?: any;
};

export const BookCard = ({
  title,
  cover,
  //   author,
  style,
  publishDate,
  avgRating,
  key,
  review,
}: BookCardProps) => {
  return (
    <div key={key} className={style}>
      <h1>{title}</h1>
      {cover ? (
        <img src={`https://covers.openlibrary.org/b/id/${cover}.jpg`} alt="" />
      ) : (
        "No image"
      )}
      <div className="authors">
        {/* {author.map((a: any) => (
          <li>{a}</li>
        ))} */}
      </div>
      <p>{publishDate}</p>
      <p>{avgRating}</p>
      <p>{review}</p>
      {/* <p>{}</p>
      <p>{}</p>
      <p>{}</p>
      <p>{}</p> */}
    </div>
  );
};
