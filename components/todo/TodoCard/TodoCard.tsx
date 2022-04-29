import { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode | ReactNode[];
}

const TodoCard: FC<IProps> = ({ children }) => {
  return <div className="p-5 border-2 border-black rounded-lg">{children}</div>;
};

export default TodoCard;
