import { Layout } from "@components/common";
import { InferGetServerSidePropsType } from "next";
import { fetchApi } from "@framework/utils";
import { TodoContainer } from "@components/todo";
import TodoItem from "@components/todo/TodoItem/TodoItem";
export async function getServerSideProps() {
  const todos = await fetchApi();
  return {
    props: {
      todos,
    }, // will be passed to the page component as props
  };
}

const Home = ({
  todos,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(todos);

  return (
    <>
      <div>
        <TodoContainer>
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </TodoContainer>
      </div>
    </>
  );
};

Home.Layout = Layout;

export default Home;
