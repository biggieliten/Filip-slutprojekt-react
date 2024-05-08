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
  //   const [input, setInput] = useState("");

  const { dispatch, state } = useContext(FavoriteBooksContext);

  //   console.log(state, "state");

  const [favoriteBook, setFavoriteBook] = useState<Book[]>([]);

  const addToFavorites = (book: any) => {
    setFavoriteBook([...favoriteBook, book]);
    console.log(favoriteBook);
  };

  const handleAddDispatch: React.FormEventHandler<
    HTMLFormElement | HTMLButtonElement
  > = (e) => {
    e.preventDefault;
    console.log(favoriteBook, "fav book");
    dispatch({ type: "FAVORITE_BOOK", payload: favoriteBook });
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
            <button>Add to read</button>
          </div>
        ))}
    </div>
  );
};
