import { FC, ReactNode } from "react";
import s from "./TodoCard.module.css";
interface IProps {
  children: ReactNode | ReactNode[];
}

const TodoCard: FC<IProps> = ({ children }) => {
  return <div className={s.root}>{children}</div>;
};

export default TodoCard;
