import { ButtonHTMLAttributes, FC, HTMLAttributes, ReactNode } from "react";
import s from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactNode[];
}

const Button: FC<ButtonProps> = ({ children, className, ...rest }) => {
  return (
    <div className={className}>
      <button className={s.button} {...rest}>
        {children}
      </button>
    </div>
  );
};

export default Button;
