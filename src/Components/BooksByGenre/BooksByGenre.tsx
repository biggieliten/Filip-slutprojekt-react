import { Book } from "../../Types/BookLibraryTypes";
import useFetch from "../../hooks/useFetch";
import { APIresp } from "../../Types/APIResp";
import { Works } from "../../Types/BookLibraryTypes";
export const BooksByGenre = () => {
  const link = `https://openlibrary.org/subjects/fantasy.json?limit=25`;
  const { data } = useFetch<APIresp>(link);
  console.log(data);

  return (
    <>
      <div>
        {data && data.works.map((book: Works) => <p>{book.subject[0]}</p>)}
      </div>
    </>
  );
};
