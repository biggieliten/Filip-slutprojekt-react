import "./FavoriteBooks.scss";
import { useContext } from "react";
import { FavoriteBooksContext } from "../../State/Books/FavoriteBooksContext";
import { ReadBooks } from "../ReadBooks/ReadBooks";
import { BookCard } from "../../Components/BookCard/BookCard";

export const FavoriteBooks = () => {
  const { state, dispatch } = useContext(FavoriteBooksContext);
  return (
    <div className="favoriteBooksPage">
      {state.favoriteBooks.map((books: any) => (
        <>
          <BookCard
            title={books.title}
            cover={books.cover_i}
            author={books.author_name}
            publishDate={books.first_publish_year}
            avgRating={books.ratings_average}
            style="favoriteBookCard"
          />
          {/* <Button title="Remove from favorites" clickEvent={() => {}} /> */}
        </>
      ))}
    </div>
  );
};
