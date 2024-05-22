import React, { useState } from "react";
import "./DropDown.scss";

export type DropDownOptionsType = {
  label: string;
  link: string;
};

type DropDownProps = {
  optionItems: DropDownOptionsType[];
  onOptionChange: (option: DropDownOptionsType) => void;
};

const DropDown = ({ optionItems, onOptionChange }: DropDownProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = optionItems.find(
      (option) => option.link === e.target.value
    );
    if (selectedOption) {
      onOptionChange(selectedOption);
    }
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
