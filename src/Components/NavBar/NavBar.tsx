type NavBarProps = {
  navBarStyle: string;
  children: any;
};

export const NavBar = ({ navBarStyle, children }: NavBarProps) => {
  return (
    <>
      <div className={navBarStyle}>{children}</div>
    </>
  );
};
