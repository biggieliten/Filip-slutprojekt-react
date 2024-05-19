import { useParams } from "react-router-dom";
import { Button } from "../../Components/Button/Button";
import { useContext, useState } from "react";
import { FavoriteBooksContext } from "../../State/Books/FavoriteBooksContext";
import "./ReviewForm.scss";

type BookKeyType = {
  bookKey?: string;
  handleClose?: () => void;
};

// FavoriteBooksContext
export const ReviewForm = (bookKey: BookKeyType) => {
  const { key } = useParams();
  const [review, setReview] = useState("");
  const [pages, setPages] = useState<number>();
  const { dispatch } = useContext(FavoriteBooksContext);

  const handleClick = (key?: string) => {
    dispatch({
      type: "ADD_REVIEW",
      payload: {
        pages,
        review,
        key,
      },
    });
    bookKey?.handleClose?.();
  };

  return (
    <>
      <form action="">
        <textarea
          placeholder={key}
          value={review}
          onChange={(e) => {
            setReview(e.target?.value);
          }}
          name=""
          id=""
        ></textarea>
        <input
          type="number"
          value={pages}
          onChange={(e) => {
            setPages(Number(e.target?.value));
          }}
        />
      </form>
      <Button
        style=""
        clickEvent={() => handleClick(bookKey?.bookKey)}
        placeholder="Submit"
      ></Button>
    </>
  );
};
