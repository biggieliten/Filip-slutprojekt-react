import "./FavoriteBooks.scss";
import { useContext } from "react";
import { FavoriteBooksContext } from "../../State/Books/FavoriteBooksContext";
import { ReadBooks } from "../ReadBooks/ReadBooks";
import { BookCard } from "../../Components/BookCard/BookCard";
import { Button } from "../../Components/Button/Button";
import { Book } from "../../Types/types";

export const FavoriteBooks = () => {
  const { state, dispatch } = useContext(FavoriteBooksContext);
  return (
    <div className="favoriteBooksPage">
      {state.favoriteBooks.map((book: Book) => (
        <>
          <Button
            clickEvent={() =>
              dispatch({ type: "REMOVE_FAVORITE", payload: { key: book.key } })
            }
            style=""
            placeholder="x"
          />
          <BookCard
            title={book.title}
            cover={book.cover_i}
            author={book.author_name}
            publishDate={book.first_publish_year}
            avgRating={book.ratings_average}
            style="favoriteBookCard"
            review={book.review}
          />
          {/* <Button title="Remove from favorites" clickEvent={() => {}} /> */}
        </>
      ))}
    </div>
  );
};
