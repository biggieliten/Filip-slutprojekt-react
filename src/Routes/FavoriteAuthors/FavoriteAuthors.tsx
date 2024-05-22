import { useContext } from "react";
import { FavoriteBooksContext } from "../../State/Books/FavoriteBooksContext";
import { AuthorCard } from "../../Components/AuthorCard/AuthorCard";
import { Button } from "../../Components/Button/Button";
import { Author } from "../../Types/types";
import RoundNumber from "../../utils/RoundNumber";

export const FavoriteAuthors = () => {
  const { state, dispatch } = useContext(FavoriteBooksContext);
  return (
    <div className="favoriteBooksPage">
      {state.favoriteAuthors.map((author: Author) => (
        <div className="favoritAuthorBox">
          <Button
            clickEvent={() =>
              dispatch({ type: "REMOVE_AUTHOR", payload: { key: author.key } })
            }
            style="removeFavorite"
            placeholder="&times;"
          />
          <AuthorCard
            name={author.name}
            works={author.top_work}
            key={author.key}
          />
        </div>
      ))}
    </div>
  );
};
