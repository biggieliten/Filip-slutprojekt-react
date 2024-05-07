import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { NavBar } from "../../Components/NavBar/NavBar";
import "../SearchResult/SearchResult.scss";
import { Book } from "../../Types/BookLibraryTypes";

export const SearchResult = () => {
  const { query } = useParams();
  //   const [input, setInput] = useState("");

  const queryURL = `https://openlibrary.org/search.json?q=${query}`;
  const { data } = useFetch<Book[]>(queryURL);
  //  {

  // 	 data.map((t) => console.log(data.title);)
  // 	}
  //   console.log(data);
  return (
    <div>
      {data?.map((book: Book) => (
        <div className={book.key} key={book.key}>
          <h2>{book.title}</h2>
          <p>{book.author_name}</p>
          {book.cover_i ? (
            <img
              className="searchedBookImage"
              src={`https://covers.openlibrary.org/b/id/${book.cover_i}.jpg`}
              alt=""
            />
          ) : (
            "No img"
          )}
        </div>
      ))}
    </div>
  );
};
