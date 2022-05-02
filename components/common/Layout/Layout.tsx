import { FC } from "react";
import { Navbar, Footer } from "@components/common";
import s from "./Layout.module.css";
import store from "@store";
import { Provider } from "react-redux";

interface IProps {
  children: React.ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <Navbar />
      <main className={s.root}>{children}</main>
      <Footer />
    </Provider>
  );
};

export default Layout;
