import { useContext } from "react";
import { FavoriteBooksContext } from "../../State/Books/FavoriteBooksContext";
import { AuthorCard } from "../../Components/AuthorCard/AuthorCard";
import { Button } from "../../Components/Button/Button";
import { Author } from "../../Types/types";
import "../FavoriteAuthors/FavoriteAuthors.scss";

export const FavoriteAuthors = () => {
  const { state, dispatch } = useContext(FavoriteBooksContext);
  return (
    <div className="favoriteBooksPage">
      {state.favoriteAuthors.map((author: Author) => (
        <div className="favoriteAuthorCard">
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
            authorKey={author.key}
            birth={author.birth_date}
            death={author.death_date}
            workCount={author.work_count}
            style="favoriteAuthorInfo"
          />
        </div>
      ))}
    </div>
  );
};
