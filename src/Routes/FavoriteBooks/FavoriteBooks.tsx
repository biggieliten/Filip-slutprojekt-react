import "./FavoriteBooks.scss";
import { useContext } from "react";
import { FavoriteBooksContext } from "../../State/Books/FavoriteBooksContext";
import { ReadBooks } from "../ReadBooks/ReadBooks";
import { BookCard } from "../../Components/BookCard/BookCard";
import { Button } from "../../Components/Button/Button";

export const FavoriteBooks = () => {
  const { state, dispatch } = useContext(FavoriteBooksContext);
  return (
    <div className="favoriteBooksPage">
      {state.favoriteBooks.map((book: any) => (
        <>
          <Button
            clickEvent={() =>
              dispatch({
                type: "REMOVE_FAVORITE",
                payload: book.key,
              })
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
