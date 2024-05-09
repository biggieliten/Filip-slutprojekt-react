type BookCardProps = {
  title: string;
  cover: any;
  author: string;
};

export const BookCard = ({ title, cover, author }: BookCardProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{author}</p>
      {cover ? (
        <img src={`https://covers.openlibrary.org/b/id/${cover}.jpg`} alt="" />
      ) : (
        "No image"
      )}
    </div>
  );
};
