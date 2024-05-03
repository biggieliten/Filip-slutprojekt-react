import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export const SearchResult = () => {
  const { query } = useParams();
  const queryURL = `https://openlibrary.org/search.json?q=${query}`;
  const { data } = useFetch(queryURL);
  console.log();
  return <div>Hola</div>;
};
