import { UilPen, UilTrash } from "@iconscout/react-unicons";
import s from "./TodoItem.module.css";
import { Toggle } from "@components/ui";
import { useState, FC } from "react";
import { Todo } from "@common/types/todo";
import { useHook } from "@framework/utils";
import { useDispatch } from "react-redux";
import { removeTodo } from "@store/todo/todoSlice";
import { METHODS } from "@common/types/methods";
import { openModal, populateModal } from "@store/ui/uiSlice";
interface ITodoItem {
  todo: Todo;
}

const TodoItem: FC<ITodoItem> = ({ todo }) => {
  const [isComplete, setIsComplete] = useState(todo.completed);
  const todoHook = useHook.todo;
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

      if (res) setIsComplete(!isComplete);
    };

    updateTodo();
  };

  const editItem = () => {
    dispatch(populateModal(todo));
    dispatch(openModal(METHODS.PUT));
  };

  return (
    <div className={s.root}>
      <div>
        <Toggle checked={isComplete} onClick={completeItem} />
      </div>
      <div className={`${s.details} ${strikeThrough}`}>
        <h3 className={s.title}>{todo.title}</h3>
        <p className={s.description}>{todo.description}</p>
      </div>
      <div className={s.buttons}>
        <button onClick={editItem}>
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
