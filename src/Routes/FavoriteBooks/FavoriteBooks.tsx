import "./FavoriteBooks.scss";
import { useContext } from "react";
import { FavoriteBooksContext } from "../../State/Books/FavoriteBooksContext";
import { BookCard } from "../../Components/BookCard/BookCard";
import { Button } from "../../Components/Button/Button";
import { Book } from "../../Types/types";

export const FavoriteBooks = () => {
  const { state, dispatch } = useContext(FavoriteBooksContext);
  return (
    <div className="favoriteBooksPage">
      {state.favoriteBooks.map((book: Book) => (
        <div className="favoritCardBox">
          <Button
            clickEvent={() =>
              dispatch({ type: "REMOVE_FAVORITE", payload: { key: book.key } })
            }
            style="removeFavorite"
            placeholder="&times;"
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
        </div>
      ))}
    </div>
  );
};
