import useFetch from "../../hooks/useFetch";
import { APIresp } from "../../Types/APIResp";
import { Works } from "../../Types/types";
import { BookCard } from "../BookCard/BookCard";
import "./BooksByGenre.scss";
export const BooksByGenre = ({ genre }: { genre: string }) => {
  const { data } = useFetch<APIresp>(
    `https://openlibrary.org/subjects/${genre}.json?limit=12`
  );

  return (
    <>
      <h1 className="genre">{genre}</h1>
      <div className="cardContainer">
        {data &&
          data.works.map((book: Works) => (
            <>
              <BookCard
                title={book.title}
                author={book.authors[0].name}
                cover={book.cover_id}
                style="bookByGenreCard"
              />
            </>
          ))}
      </div>
    </>
  );
};
