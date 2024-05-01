import { NavBar } from "../Components/NavBar/NavBar";
import Input from "../Components/Input/Input";
import { useState } from "react";
import useFetch from "../hooks/useFetch";

const HomePage = () => {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const url = `https://openlibrary.org/search.json?q=`;

  const querySearch = url + query;
  useFetch(querySearch) as any;

  const onClickFetch = async () => {
    setQuery(input);
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
            labelName=""
          />
          <button onClick={onClickFetch}>Click</button>
        </NavBar>
      </div>
    </>
  );
};

export default HomePage;
