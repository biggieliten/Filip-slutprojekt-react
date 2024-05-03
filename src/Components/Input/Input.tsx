type InputTypes = {
  inputType: string;
  onChange?: React.FormEventHandler;
  value?: any;
  name: string;
  navBarClass: string;
  placeholder: string;
};

const Input = ({
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
      </div>
    </>
  );
};

export default Input;
