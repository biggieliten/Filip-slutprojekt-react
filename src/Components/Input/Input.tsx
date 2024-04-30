type InputTypes = {
  inputType: string;
  labelName: string;
  onChange: React.FormEventHandler;
  value: any;
  name: string;
  navBarClass: string;
  placeholder: string;
};

const Input = ({
  inputType,
  labelName,
  onChange,
  value,
  name,
  navBarClass,
  placeholder,
}: InputTypes) => {
  return (
    <>
      <div>
        <label className={`songInput ${labelName}`} htmlFor="">
          {labelName}
          <input
            className={navBarClass}
            name={name}
            type={inputType}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
          />
        </label>
      </div>
    </>
  );
};

export default Input;
