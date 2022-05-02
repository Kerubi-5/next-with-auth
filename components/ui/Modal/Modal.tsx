import { FC, ReactNode } from "react";
import s from "./Modal.module.css";
import { UilTimesSquare } from "@iconscout/react-unicons";

interface IModal {
  children: ReactNode | ReactNode[];
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

const Modal: FC<IModal> = ({ children, isOpen, setOpen }) => {
  return (
    <div
      className={`${!isOpen && `hidden`} ${s.root}`}
      onClick={() => setOpen(!open)}
    >
      <div className={s.modalBody} onClick={(e) => e.stopPropagation()}>
        <span className={s.close} onClick={() => setOpen(!isOpen)}>
          <UilTimesSquare />
        </span>
        <div className={s.content}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
