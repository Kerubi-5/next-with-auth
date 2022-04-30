import { FC, InputHTMLAttributes } from "react";
import s from "./Input.module.css";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: any;
}

const Input: FC<IProps> = ({ label, icon: Icon, type = "text", ...rest }) => {
  return (
    <div className={s.root}>
      <input className={s.input} type={type} {...rest} />
      <span className={s.label}>
        {Icon && <Icon className={s.icon} />}
        {label}
      </span>
    </div>
  );
};

export default Input;
