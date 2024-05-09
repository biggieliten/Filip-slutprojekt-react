import { BookCard } from "../../Components/BookCard/BookCard";
import { useContext, useState } from "react";
import { FavoriteBooksContext } from "../../State/Books/FavoriteBooksContext";
import { NavLink, Outlet, useParams } from "react-router-dom";

export const ReadBooks = () => {
  const { key } = useParams();
  const { state, dispatch } = useContext(FavoriteBooksContext);
  const [bookKey, setBookKey] = useState<string>("");
  return (
    <div>
      {state &&
        state.readBooks.map((books: any, index: number) => (
          <>
            <BookCard
              title={books.title}
              cover={books.cover_i}
              author={books.author_name}
            />
            <NavLink to={`/read-books/review${books.key}`}>
              Add a review
            </NavLink>
          </>
          // {/* <Button title="Remove from favorites" clickEvent={() => {}} /> */}
        ))}
      <Outlet />
    </div>
  );
};
