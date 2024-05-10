type ButtonProps = {
  clickEvent: React.MouseEventHandler<HTMLButtonElement> | any;
  placeholder: string;
};

export const Button = ({ clickEvent, placeholder }: ButtonProps) => (
  <button className={`Button`} onClick={clickEvent}>
    {placeholder}
  </button>
);
