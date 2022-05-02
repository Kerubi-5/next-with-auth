import { Layout } from "@components/common";
import { InferGetServerSidePropsType } from "next";
import { TodoCard, TodoItem } from "@components/todo";
import { useHook } from "@framework/utils";
import { Todo } from "@common/types/todo";
import { Button, Modal } from "@components/ui";
import { useState } from "react";
import { Form, Input } from "@components/form";
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
  const [open, setOpen] = useState(false);

  const createTodo = () => {
    const useAddTodo = useHook.todo.useAddTodo();
  };

  return (
    <>
      <h1 className="text-center text-2xl font-bold uppercase mb-3 text-gradient">
        Todo List
      </h1>
      <Button className="my-5" onClick={() => setOpen(!open)}>
        Create new todo
      </Button>
      <Modal isOpen={open} setOpen={setOpen}>
        <Form className="my-10 px-4">
          <h2>Create a new todo</h2>
          <Input name="title" label="Title" />
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
