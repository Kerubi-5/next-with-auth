import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ReactNode, FC } from "react";

type Props = {
  children: ReactNode | ReactNode[];
};

const Noop = ({ children }: Props) => <>{children}</>;

function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: FC<Props> } }) {
  const Layout = Component.Layout ?? Noop;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
