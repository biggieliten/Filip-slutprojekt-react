type InputTypes = {
  inputType: string;
  onChange?: React.FormEventHandler;
  value?: any;
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
        />
        {/* <button onClick={handleClick}>Search</button> */}
      </div>
    </>
  );
};

export default SearchBar;
