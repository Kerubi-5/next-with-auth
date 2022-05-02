import { Layout } from "@components/common";
import { InferGetServerSidePropsType } from "next";
import { TodoCard, TodoItem } from "@components/todo";
import { useHook } from "@framework/utils";
import { Todo } from "@common/types/todo";
import { Button, Modal } from "@components/ui";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { populateTodos } from "@store/todo/todoSlice";
import { selectTodos, selectUser } from "@store";
import { METHODS } from "@common/types/methods";
import { openModal } from "@store/ui/uiSlice";
import Link from "next/link";

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
  const dispatch = useDispatch();
  const todoList = useSelector(selectTodos);
  const { token } = useSelector(selectUser);

  const addTodoItem = () => {
    dispatch(openModal(METHODS.POST));
  };

  useEffect(() => {
    dispatch(populateTodos(todos));
  }, [dispatch, todos]);

  if (!token) {
    return (
      <div>
        Go to{" "}
        <Link href="/auth/login">
          <a className="font-bold text-blue-500">Login</a>
        </Link>
      </div>
    );
  }

  return (
    <>
      <h1 className="text-center text-2xl font-bold uppercase mb-3 text-gradient">
        Todo List
      </h1>
      <Button className="my-5" onClick={addTodoItem}>
        Create new todo
      </Button>
      <Modal />
      <div>
        <TodoCard>
          {todoList.map((todo) => (
            <TodoItem key={todo._id} todo={todo} />
          ))}
        </TodoCard>
      </div>
    </>
  );
};

Home.Layout = Layout;

export default Home;
