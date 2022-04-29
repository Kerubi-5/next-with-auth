import { FC, FormHTMLAttributes, ReactNode } from "react";

interface Props extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode | ReactNode[];
}

const Form: FC<Props> = ({ children, ...rest }) => {
  return (
    <form {...rest}>
      <div className="max-w-md mx-auto">{children}</div>
    </form>
  );
};

export default Form;
