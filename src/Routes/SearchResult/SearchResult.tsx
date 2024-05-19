import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { FavoriteBooksContext } from "../../State/Books/FavoriteBooksContext";
import { BookCard } from "../../Components/BookCard/BookCard";
import "../SearchResult/SearchResult.scss";
import { Book } from "../../Types/types";
import { useContext, useState } from "react";
import { Button } from "../../Components/Button/Button";
import { APIresp } from "../../Types/APIResp";
import RoundNumber from "../../utils/RoundNumber";
import { ReadBooks } from "../ReadBooks/ReadBooks";
import ExistsInArray from "../../utils/ExistsInArray";

export const SearchResult = () => {
  const { query } = useParams();
  const queryURL = `https://openlibrary.org/search.json?q=${query}`;
  const { data, loading, error } = useFetch<APIresp>(queryURL);

  const { dispatch, state } = useContext(FavoriteBooksContext);

  const [favoriteBook, setFavoriteBook] = useState<Book[]>([]);

  const addToFavorites = (book: Book) => {
    const favExists = ExistsInArray(state.favoriteBooks, book.key);

    if (!favExists) {
      dispatch({ type: "FAVORITE_BOOK", payload: book });
    }
    setFavoriteBook([...favoriteBook, book]);
  };

  const addToRead = (book: Book) => {
    const bookExists = ExistsInArray(state.readBooks, book.key);

    if (!bookExists) {
      dispatch({
        type: "READ_BOOK",
        payload: { book: { ...book, key: book.key } },
      });
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>404 Not Found</p>;

  return (
    <div className="searchResultSection">
      {data &&
        data.docs.map((book: Book) => (
          <div className="searchedBookCont">
            <BookCard
              key={book.key}
              title={book.title}
              cover={book.cover_i}
              author={book.author_name}
              publishDate={book.first_publish_year}
              avgRating={
                book.ratings_average && RoundNumber(book.ratings_average)
              }
              genre={book.subject && book.subject}
              style="searchedBookCard"
            />
            <div className="buttonCont">
              <Button
                style="addFavoriteBtn"
                placeholder="Add to Favorites"
                clickEvent={() => addToFavorites(book)}
              />
              <Button
                style="addReadBtn"
                placeholder="Add to Read"
                clickEvent={() => addToRead(book)}
              />
            </div>
          </div>
        ))}
    </div>
  );
};
