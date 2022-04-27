import { Layout } from "@components/common";
import type { NextPage } from "next";

const Home = () => {
  return (
    <div>
      Hello
      <span>User here: </span>
      <h1 className="underline">SD</h1>
      <h1 className="text-red-400">SDASDS</h1>
    </div>
  );
};

Home.Layout = Layout;

export default Home;
