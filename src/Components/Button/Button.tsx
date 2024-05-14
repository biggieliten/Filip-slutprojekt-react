type ButtonProps = {
  clickEvent: React.MouseEventHandler<HTMLButtonElement> | any;
  placeholder: string;
  style: string;
};

export const Button = ({ style, clickEvent, placeholder }: ButtonProps) => (
  <button className={style} onClick={clickEvent}>
    {placeholder}
  </button>
);
