import { FC } from "react";
import { Navbar } from "@components/common";
import s from "./Layout.module.css";

interface IProps {
  children: React.ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
