import { UilPen, UilTrash } from "@iconscout/react-unicons";
import s from "./TodoItem.module.css";
import { Button, Modal, Toggle } from "@components/ui";
import { useState, FC, useRef, FormEvent } from "react";
import { Todo } from "@common/types/todo";
import { useHook } from "@framework/utils";
import { Form, Input } from "@components/form";
import { useDispatch } from "react-redux";
import { removeTodo } from "@store/todo/todoSlice";
interface ITodoItem {
  todo: Todo;
}

const TodoItem: FC<ITodoItem> = ({ todo }) => {
  const [isComplete, setIsComplete] = useState(todo.completed);
  const [open, setOpen] = useState(false);
  const todoHook = useHook.todo;
  const editForm = useRef<HTMLFormElement>(null);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const strikeThrough = isComplete && "line-through";
  const dispatch = useDispatch();

  const deleteItem = () => {
    const deleteTodo = async () => {
      const idQuery = "/" + todo._id;
      const removeItem = await todoHook.useRemoveTodo();

      const res = await removeItem(idQuery);

      if (res) {
        dispatch(removeTodo(res));
      }
    };

    deleteTodo();
  };

  const completeItem = () => {
    const updateTodo = async () => {
      const idQuery = "/" + todo._id;
      const updateItem = await todoHook.useUpdateTodo();

      const res = await updateItem(idQuery, {
        completed: !isComplete,
      });

      console.log(res);
      setIsComplete(!isComplete);
    };

    updateTodo();
  };

  const editItem = (e: FormEvent) => {
    e.preventDefault();
    setOpen(true);

    const updateTodo = async () => {
      const idQuery = "/" + todo._id;
      const updateItem = await todoHook.useUpdateTodo();

      const res = await updateItem(idQuery, {
        title,
        description,
      });

      setOpen(false);
    };

    updateTodo();
  };

  return (
    <div className={s.root}>
      <Modal isOpen={open} setOpen={setOpen}>
        <Form ref={editForm} className="my-10" onSubmit={(e) => editItem(e)}>
          <h2>EDIT FORM</h2>
          <Input
            label="title"
            name="todoTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            label="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button className="my-5">SUBMIT</Button>
        </Form>
      </Modal>
      <div>
        <Toggle checked={isComplete} onClick={completeItem} />
      </div>
      <div className={`${s.details} ${strikeThrough}`}>
        <h3 className={s.title}>{title}</h3>
        <p className={s.description}>{description}</p>
      </div>
      <div className={s.buttons}>
        <button onClick={() => setOpen(!open)}>
          {<UilPen className="text-[#60a5fa]" />}
        </button>
        <button onClick={deleteItem}>
          {<UilTrash className="text-[#60a5fa]" />}
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
