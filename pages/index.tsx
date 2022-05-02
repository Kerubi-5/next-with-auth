import { Layout } from "@components/common";
import { InferGetServerSidePropsType } from "next";
import { TodoCard, TodoItem } from "@components/todo";
import { useHook } from "@framework/utils";
import { Todo } from "@common/types/todo";
import { Button, Modal } from "@components/ui";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, populateTodos } from "@store/todo/todoSlice";
import { selectTodos } from "@store";
import { METHODS } from "@common/types/methods";
import { openModal, populateModal } from "@store/ui/uiSlice";

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

  const addTodoItem = () => {
    dispatch(openModal(METHODS.POST));
  };

  useEffect(() => {
    dispatch(populateTodos(todos));
  }, [dispatch, todos]);

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
