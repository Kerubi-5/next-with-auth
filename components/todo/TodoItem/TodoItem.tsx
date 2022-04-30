import { UilPen, UilTrash } from "@iconscout/react-unicons";
import s from "./TodoItem.module.css";

const TodoItem = () => {
  return (
    <div className={s.root}>
      <div>
        <input type="checkbox" />
      </div>
      <div className={s.details}>
        <h3 className={s.title}>Item</h3>
        <p className={s.description}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere,
          quidem.
        </p>
      </div>
      <div className={s.buttons}>
        <button>{<UilPen className="text-[#60a5fa]" />}</button>
        <button>{<UilTrash className="text-[#60a5fa]" />}</button>
      </div>
    </div>
  );
};

export default TodoItem;
