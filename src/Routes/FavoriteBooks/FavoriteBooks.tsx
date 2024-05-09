import { useContext } from "react";
import { FavoriteBooksContext } from "../../State/Books/FavoriteBooksContext";
import { ReadBooks } from "../ReadBooks/ReadBooks";
import { BookCard } from "../../Components/BookCard/BookCard";
import { Button } from "@mui/material";

export const FavoriteBooks = () => {
  const { state, dispatch } = useContext(FavoriteBooksContext);
  return (
    <div>
      {state.favoriteBooks.map((books: any) => (
        <>
          <BookCard
            title={books.title}
            cover={books.cover_i}
            author={books.author_name}
          />
          {/* <Button title="Remove from favorites" clickEvent={() => {}} /> */}
        </>
      ))}
    </div>
  );
};
