import { Layout } from "@components/common";
import { InferGetServerSidePropsType } from "next";
import { TodoCard, TodoItem } from "@components/todo";
import { useHook } from "@framework/utils";
import { Todo } from "@common/types/todo";
import { Button, Modal } from "@components/ui";
import { FormEvent, useEffect, useRef, useState } from "react";
import { Form, Input } from "@components/form";
import { useSelector, useDispatch } from "react-redux";
import { populateTodos, addTodo } from "@store/todo/todoSlice";
import { selectTodos } from "@store";

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
  const todoForm = useRef<HTMLFormElement>(null);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const todoList = useSelector(selectTodos);

  const createTodo = (e: FormEvent) => {
    e.preventDefault();
    const todo = useHook.todo;

    const title = todoForm.current?.todoTitle.value;
    const description = todoForm.current?.description.value;

    if (!title || !description)
      return alert("Please complete the fields before submitting");

    const createTodoItem = async () => {
      const create = await todo.useAddTodo();

      const res = await create({ title, description });

      if (res) {
        dispatch(addTodo(res));
        setOpen(false);
      }
    };

    createTodoItem();
  };

  useEffect(() => {
    dispatch(populateTodos(todos));
  }, [dispatch, todos]);

  return (
    <>
      <h1 className="text-center text-2xl font-bold uppercase mb-3 text-gradient">
        Todo List
      </h1>
      <Button className="my-5" onClick={() => setOpen(!open)}>
        Create new todo
      </Button>
      <Modal isOpen={open} setOpen={setOpen}>
        <Form
          ref={todoForm}
          className="my-10 px-4"
          onSubmit={(e) => createTodo(e)}
        >
          <h2>Create a new todo</h2>
          <Input name="todoTitle" label="Title" />
          <Input name="description" label="Description" />
          <div>
            <Button className="my-5" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Modal>
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
