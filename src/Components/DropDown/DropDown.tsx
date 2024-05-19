import React, { useState } from "react";
import "./DropDown.scss";

export type DropDownOptionsType = {
  label: string;
  link: string;
};

type DropDownProps = {
  optionItems: DropDownOptionsType[];
  onOptionChange: (value: string) => void;
};

const DropDown = ({ optionItems, onOptionChange }: DropDownProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onOptionChange(e.target.value);
  };

  return (
    <>
      <select onChange={handleChange} name="dropdown" id="">
        {optionItems.map((items) => (
          <>
            <option value={items.link}>{items.label}</option>
            <p>{items.link}</p>
          </>
        ))}
      </select>
    </>
  );
};

export default DropDown;
