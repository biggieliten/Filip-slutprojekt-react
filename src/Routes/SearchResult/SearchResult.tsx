import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { FavoriteBooksContext } from "../../State/Books/FavoriteBooksContext";
import { BookCard } from "../../Components/BookCard/BookCard";
import "../SearchResult/SearchResult.scss";
import { Book } from "../../Types/BookLibraryTypes";
import { useContext, useState } from "react";
import { Button } from "../../Components/Button/Button";

export const SearchResult = () => {
  const { query } = useParams();
  const queryURL = `https://openlibrary.org/search.json?q=${query}`;
  const { data, loading, error } = useFetch<Book[]>(queryURL);

  const { dispatch, state } = useContext(FavoriteBooksContext);

  const [favoriteBook, setFavoriteBook] = useState<Book[]>([]);
  const [readBook, setReadBook] = useState<Book[]>([]);

  const addToFavorites = (book: any) => {
    setFavoriteBook([...favoriteBook, book]);
    dispatch({ type: "FAVORITE_BOOK", payload: book });
    console.log(state.favoriteBooks, "state of fav");
  };

  const addToRead = (book: any) => {
    setReadBook([...readBook, book]);
    dispatch({ type: "READ_BOOK", payload: book });
    console.log(state.readBooks, "state of read");
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>404 Not Found</p>;

  return (
    <div>
      {data &&
        data.map((book: Book) => (
          <>
            <BookCard
              title={book.title}
              cover={book.cover_i}
              author={book.author_name}
            />
            <Button
              title="Add to Favorites"
              clickEvent={() => addToFavorites(book)}
            />
            <Button title="Add to Read" clickEvent={() => addToRead(book)} />
          </>
        ))}
    </div>
  );
};
