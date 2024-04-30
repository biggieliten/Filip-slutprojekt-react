import BasicButtons from "../Components/BasicButton/BasicButton";

import { NavBar } from "../Components/NavBar/NavBar";
import Input from "../Components/Input/Input";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

const HomePage = () => {
  const [input, setInput] = useState("");
  //   console.log(data);
  const { data } = useFetch(input) as any;
  const onClickFetch = async () => {
    // console.log(data);
  };
  //   {
  //     useFetch("");
  //   }
  //   const fetchOnClick = (input: any) => {
  //     fetch(input);
  //   };
  //   const fetch = (input: any) => useFetch(input);
  //   console.log(input);
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
            value={input}
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
