import { useState } from "react";

type DropDownProps = {
  optionItems: any;
  onOptionChange: any;
};

const DropDown = ({ optionItems, onOptionChange }: DropDownProps) => {
  //   const [option, setOption] = useState();

  const handleChange = (e: any) => {
    onOptionChange(e.target.value);
    console.log(optionItems);
  };

  return (
    <>
      <select onChange={handleChange} name="dropdown" id="">
        {optionItems.map((items: any) => (
          <>
            <option value={items.link}>{items.label}</option>
            <p>{items.link}</p>
          </>
        ))}
      </select>
      {/* {console.log(onOptionChange, "option")} */}
      {/* <div>{option}</div> */}
    </>
  );
};

export default DropDown;
