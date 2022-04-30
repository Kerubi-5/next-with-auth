import { Layout } from "@components/common";
import { InferGetServerSidePropsType } from "next";
import { TodoCard, TodoItem } from "@components/todo";
import { useHook } from "@framework/utils";
export async function getServerSideProps() {
  const todos = await useHook.todo.useTodo();

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
        <TodoCard>
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </TodoCard>
      </div>
    </>
  );
};

Home.Layout = Layout;

export default Home;
