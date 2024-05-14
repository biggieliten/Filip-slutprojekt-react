import { Book } from "../../Types/BookLibraryTypes";
import useFetch from "../../hooks/useFetch";
import { APIresp } from "../../Types/APIResp";
import { Works } from "../../Types/BookLibraryTypes";
import { BookCard } from "../BookCard/BookCard";
import "./BooksByGenre.scss";

export const BooksByGenre = ({ genre }: { genre: string }) => {
  //   const link = `https://openlibrary.org/subjects/${genre}.json?limit=25`;
  const { data } = useFetch<APIresp>(
    `https://openlibrary.org/subjects/${genre}.json?limit=10`
  );
  console.log(data?.works[0]);

  return (
    <>
      {data &&
        data.works.map(
          (book: Works) => (
            <BookCard
              title={book.title}
              author={book.authors[0].name}
              cover={book.cover_id}
              genre={book.subject[0]}
              style="bookByGenreCard"
              publishDate={book.first_publish_year}
            />
          )
          //   <p>{book.title}</p>
        )}
    </>
  );
};
