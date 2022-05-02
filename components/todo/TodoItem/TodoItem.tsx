import { UilPen, UilTrash } from "@iconscout/react-unicons";
import s from "./TodoItem.module.css";
import { Toggle } from "@components/ui";
import { useState, FC } from "react";
import { Todo } from "@common/types/todo";
import { useHook } from "@framework/utils";

interface ITodoItem {
  todo: Todo;
}

const TodoItem: FC<ITodoItem> = ({ todo }) => {
  const [isComplete, setIsComplete] = useState(false);
  const todoHook = useHook.todo;

  const strikeThrough = isComplete && "line-through";

  const deleteItem = () => {
    const deleteTodo = async () => {
      const idQuery = "/" + todo._id;
      const removeItem = await todoHook.useRemoveTodo();

      const res = await removeItem(idQuery);

      console.log(res);
    };

    deleteTodo();
  };

  return (
    <div className={s.root}>
      <div>
        <Toggle
          checked={isComplete}
          onClick={() => setIsComplete(!isComplete)}
        />
      </div>
      <div className={`${s.details} ${strikeThrough}`}>
        <h3 className={s.title}>{todo.title}</h3>
        <p className={s.description}>{todo.description}</p>
      </div>
      <div className={s.buttons}>
        <button>{<UilPen className="text-[#60a5fa]" />}</button>
        <button onClick={deleteItem}>
          {<UilTrash className="text-[#60a5fa]" />}
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
