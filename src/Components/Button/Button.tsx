type ButtonProps = {
  clickEvent: React.MouseEventHandler<HTMLButtonElement> | any;
  title: string;
};

export const Button = ({ clickEvent, title }: ButtonProps) => (
  <button className={`Button`} onClick={clickEvent}>
    {title}
  </button>
);
