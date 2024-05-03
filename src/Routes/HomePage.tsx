import { NavBar } from "../Components/NavBar/NavBar";
import Input from "../Components/Input/Input";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import { NavLink, useNavigate } from "react-router-dom";

const HomePage = () => {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const url = `https://openlibrary.org/search.json?q=`;

  const querySearch = url + query;
  const { data } = useFetch(querySearch) as any;

  const navigate = useNavigate();

  const handleClick = async () => {
    setQuery(input);
    navigate(`search-result/${input}`);
    console.log(data);
  };

  return (
    <>
      <div>
        <NavBar navBarStyle="navBar">
          <h1>BOOK SEARCH 2000</h1>
          <Input
            navBarClass="navBarInput"
            placeholder="Sök bok, författare, genre...."
            inputType="text"
            name=""
            onChange={(e: any) => setInput(e.target.value)}
          />
          <button onClick={handleClick}>Search</button>
        </NavBar>
      </div>
    </>
  );
};

export default HomePage;
