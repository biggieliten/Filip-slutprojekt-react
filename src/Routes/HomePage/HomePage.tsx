import { NavBar } from "../../Components/NavBar/NavBar";
import { APIresp } from "../../Types/APIResp";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import SearchBar from "../../Components/SearchBar/SearchBar";
import DropDown from "../../Components/DropDown";
import { BooksByGenre } from "../../Components/BooksByGenre/BooksByGenre";
import { Button } from "../../Components/Button/Button";
const dropDownOptions = [
  { label: "All", link: "https://openlibrary.org/search.json?q=" },
  { label: "Title", link: "https://openlibrary.org/search.json?title=" },
  //   { label: "Author", link: "https://openlibrary.org/search/authors.json?q=" },
  { label: "Author", link: "https://openlibrary.org/search.json?author=" },
];

const HomePage = () => {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const [searchOption, setSearchOption] = useState<string>();

  const querySearch = searchOption + query;
  const { data } = useFetch<APIresp>(querySearch);

  const navigate = useNavigate();

  const handleClick = async () => {
    setQuery(input);
    navigate(`/search-result/${input}`);
    console.log(data);
  };

  const handleOptionChange = (option: string) => {
    setSearchOption(option);
    // console.log(searchOption);
  };

  return (
    <>
      <div>
        <NavBar navBarStyle="navBar">
          <NavLink className="logo" to="/">
            BOOK SEARCH 2000
          </NavLink>
          <DropDown
            optionItems={dropDownOptions}
            onOptionChange={handleOptionChange}
          />
          <SearchBar
            navBarClass="navBarInput"
            placeholder="Sök bok, författare, genre...."
            inputType="text"
            name=""
            onChange={(e: any) => setInput(e.target.value)}
          />
          <Button clickEvent={handleClick} placeholder="Search"></Button>
          {/* <button onClick={handleClick}>Search</button> */}
          <label htmlFor=""></label>

          <NavLink to="/favorite-authors">Favorite Authors</NavLink>
          <NavLink to="/favorite-books">Favorite Books</NavLink>
          <NavLink to="/read-books">Read Books</NavLink>
        </NavBar>

        <div className="scifiBooks">
          {location.pathname === "/" && <BooksByGenre />}
          {/* <BooksByGenre subject="horror" /> */}
        </div>
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </>
  );
};

export default HomePage;
