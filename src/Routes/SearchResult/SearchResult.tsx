import { useLocation, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { FavoriteBooksContext } from "../../State/Books/FavoriteBooksContext";
import { BookCard } from "../../Components/BookCard/BookCard";
import "../SearchResult/SearchResult.scss";
import { Book } from "../../Types/types";
import { useContext, useEffect } from "react";
import { Button } from "../../Components/Button/Button";
import { APIresp } from "../../Types/APIResp";
import RoundNumber from "../../utils/RoundNumber";
import ExistsInArray from "../../utils/ExistsInArray";
import CircularIndeterminate from "../../Components/Loading/Loading";
import { AuthorCard } from "../../Components/AuthorCard/AuthorCard";
import { Author } from "../../Types/types";

export const SearchResult = () => {
  const location = useLocation();
  const searchOption = location.state.searchType;
  const queryURL = location.state.searchUrl;

  const { dispatch, state } = useContext(FavoriteBooksContext);
  const { data, loading, error } = useFetch<APIresp>(queryURL);

  if (loading) return <CircularIndeterminate />;
  if (error) return <p>404 Not Found</p>;

  const addToFavorites = (book: Book) => {
    const favExists = ExistsInArray(state.favoriteBooks, book.key);
    if (!favExists) {
      dispatch({ type: "FAVORITE_BOOK", payload: book });
    }
  };

  const addToRead = (book: Book) => {
    const readExists = ExistsInArray(state.readBooks, book.key);
    if (!readExists) {
      dispatch({
        type: "READ_BOOK",
        payload: { book: { ...book, key: book.key } },
      });
    }
  };

  const authorToFav = (author: Author) => {
    const authorExists = ExistsInArray(state.favoriteAuthors, author.key);
    if (!authorExists) {
      dispatch({ type: "FAVORITE_AUTHOR", payload: author });
    }
  };

  return (
    <div className="searchResultSection">
      {searchOption === "Title" &&
        data &&
        data.docs.map((book: Book) => (
          <div className="searchedBookCont" key={book.key}>
            <BookCard
              title={book.title}
              cover={book.cover_i}
              author={book.author_name && book.author_name[0]}
              publishDate={book.first_publish_year}
              avgRating={
                book.ratings_average && RoundNumber(book.ratings_average)
              }
              genre={book.subject && book.subject}
              style="searchedBookCard"
            />
            <div className="buttonCont">
              <Button
                style="addFavoriteBtn"
                placeholder="Add to Favorites"
                clickEvent={() => addToFavorites(book)}
              />
              <Button
                style="addReadBtn"
                placeholder="Add to Read"
                clickEvent={() => addToRead(book)}
              />
            </div>
          </div>
        ))}
      {searchOption === "Author" &&
        data &&
        data.docs.map((author: Author) => (
          <div className="searchedAuthorCard" key={author.key}>
            <AuthorCard
              key={author.key}
              authorKey={author.key}
              name={author.name}
              birth={author.birth_date}
              death={author.death_date}
              works={author.top_work}
              workCount={author.work_count}
              style="authorCard"
            />
            <Button
              clickEvent={() => authorToFav(author)}
              style="authorAddButton"
              placeholder="Add to Favorites"
            />
          </div>
        ))}
    </div>
  );
};
