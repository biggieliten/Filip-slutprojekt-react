import { useParams } from "react-router-dom";
import { Button } from "../../Components/Button/Button";
import { ChangeEventHandler, useContext, useState } from "react";
import { FavoriteBooksContext } from "../../State/Books/FavoriteBooksContext";

type bookKey = {
  bookKey?: string;
  handleClose?: () => void;
};
// FavoriteBooksContext
export const ReviewForm = (bookKey: bookKey) => {
  const { key } = useParams();
  const [review, setReview] = useState("");
  const [pages, setPages] = useState<number>();
  const [bookKeys, setBookKeys] = useState({});
  const { dispatch, state } = useContext(FavoriteBooksContext);
  //   const [bookKey, setBookKey] = useState<string>("");

  const handleClick = (key?: string) => {
    // setBookKey(key);

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
