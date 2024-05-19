import { ReactNode } from "react";

type NavBarProps = {
  navBarStyle: string;
  children: ReactNode;
};

export const NavBar = ({ navBarStyle, children }: NavBarProps) => {
  return (
    <>
      <div className={navBarStyle}>{children}</div>
    </>
  );
};
