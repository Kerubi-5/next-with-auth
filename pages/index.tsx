import { Layout } from "@components/common";
import { InferGetServerSidePropsType } from "next";
import { TodoCard, TodoItem } from "@components/todo";
import { useHook } from "@framework/utils";
import { Todo } from "@common/types/todo";
export async function getServerSideProps() {
  const todo = useHook.todo;

  const todos = (await todo.useTodo()) as Todo[];

  return {
    props: {
      todos,
    }, // will be passed to the page component as props
  };
}

const Home = ({
  todos,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <h1 className="text-center text-2xl font-bold uppercase mb-3 text-gradient">
        Todo List
      </h1>
      <div>
        <TodoCard>
          {todos.map((todo) => (
            <TodoItem key={todo._id} todo={todo} />
          ))}
        </TodoCard>
      </div>
    </>
  );
};

Home.Layout = Layout;

export default Home;
