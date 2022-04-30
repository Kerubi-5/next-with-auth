import { UilCheck } from "@iconscout/react-unicons";
import { FC, InputHTMLAttributes } from "react";
import s from "./Toggle.module.css";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: "checkbox" | "radio";
  checked?: boolean;
}

const Toggle: FC<IProps> = ({
  type = "checkbox",
  checked,
  onClick,
  ...rest
}) => {
  return (
    <div className={s.root} onClick={onClick}>
      <input type={type} className="appearance-none" {...rest} />
      <span className={`${s.checkBox} ${!checked && `hidden`}`}>
        <UilCheck />
      </span>
    </div>
  );
};

export default Toggle;
