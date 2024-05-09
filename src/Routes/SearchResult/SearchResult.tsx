import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { FavoriteBooksContext } from "../../State/Books/FavoriteBooksContext";

import "../SearchResult/SearchResult.scss";
import { Book } from "../../Types/BookLibraryTypes";
import { useContext, useEffect, useState } from "react";

export const SearchResult = () => {
  const { query } = useParams();
  const queryURL = `https://openlibrary.org/search.json?q=${query}`;
  const { data } = useFetch<Book[]>(queryURL);

  const { dispatch, state } = useContext(FavoriteBooksContext);

  const [favoriteBook, setFavoriteBook] = useState<Book[]>([]);
  const [readBook, setReadBook] = useState<Book[]>([]);

  const addToFavorites = (book: any) => {
    setFavoriteBook([...favoriteBook, book]);
    dispatch({ type: "FAVORITE_BOOK", payload: book });
    console.log(state.readBooks, "state of fav");
    // handleAddDispatch(book);
  };

  const addToRead = (book: any) => {
    setReadBook([...readBook, book]);
    dispatch({ type: "READ_BOOK", payload: book });
    console.log(state.readBooks, "state of read");
    // handleAddDispatch(book);
  };

  return (
    <div>
      {data &&
        data.map((book: Book) => (
          <div className={book.key} key={book.key}>
            <h2>{book.title}</h2>
            <p>{book.author_name}</p>
            {book.cover_i ? (
              <img
                className="searchedBookImage"
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}.jpg`}
                alt=""
              />
            ) : (
              "No img"
            )}
            <button onClick={() => addToFavorites(book)}>
              Add to favorites
            </button>
            <button onClick={() => addToRead(book)}>Add to read</button>
          </div>
        ))}
    </div>
  );
};
