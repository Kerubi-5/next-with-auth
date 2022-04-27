import { FC } from "react";
import { Navbar, Footer } from "@components/common";
import s from "./Layout.module.css";

interface IProps {
  children: React.ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={s.root}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
