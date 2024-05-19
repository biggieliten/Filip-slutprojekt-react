type InputTypes = {
  inputType: string;
  onChange?: React.FormEventHandler;
  value?: string | number;
  name: string;
  navBarClass: string;
  placeholder: string;
};

const SearchBar = ({
  inputType,
  onChange,
  value,
  name,
  navBarClass,
  placeholder,
}: InputTypes) => {
  return (
    <>
      <div>
        <input
          className={navBarClass}
          name={name}
          type={inputType}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          //   onKeyDown={() => onchange}
        />
        {/* <button onClick={handleClick}>Search</button> */}
      </div>
    </>
  );
};

export default SearchBar;
