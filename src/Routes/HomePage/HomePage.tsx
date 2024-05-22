import { NavBar } from "../../Components/NavBar/NavBar";
import { useState } from "react";
import { NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";
import SearchBar from "../../Components/SearchBar/SearchBar";
import DropDown from "../../Components/DropDown/DropDown";
import { BooksByGenre } from "../../Components/BooksByGenre/BooksByGenre";
import { Button } from "../../Components/Button/Button";

const dropDownOptions = [
  { label: "Title", link: "https://openlibrary.org/search.json?title=" },
  { label: "Author", link: "https://openlibrary.org/search/authors.json?q=" },
];

const HomePage = () => {
  const [input, setInput] = useState("");
  const [searchOption, setSearchOption] = useState(dropDownOptions[0]);

  const navigate = useNavigate();
  const location = useLocation();

  const handleOptionChange = (option: { label: string; link: string }) => {
    setSearchOption(option);
  };

  const handleClick = () => {
    navigate(`/search-result/${input}`, {
      state: {
        searchType: searchOption.label,
        searchUrl: searchOption.link + input,
      },
    });
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
            placeholder="Search book, author, genre..."
            inputType="text"
            name=""
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInput(e.target.value)
            }
          />
          <Button
            style="searchBtn"
            clickEvent={handleClick}
            placeholder="Search"
          />
          <div className="navBarLinks">
            <NavLink to="/favorite-authors">Favorite Authors</NavLink>
            <NavLink to="/favorite-books">Favorite Books</NavLink>
            <NavLink to="/read-books">Read Books</NavLink>
          </div>
        </NavBar>

        {location.pathname === "/" && (
          <div className="booksByGenre">
            <BooksByGenre genre="sci-fi" />
            <BooksByGenre genre="fantasy" />
            <BooksByGenre genre="love" />
          </div>
        )}
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </>
  );
};

export default HomePage;
