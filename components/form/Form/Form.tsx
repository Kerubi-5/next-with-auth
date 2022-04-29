import {
  FormHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction,
  ReactNode,
} from "react";

interface Props extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode | ReactNode[];
}

type Ref = HTMLFormElement;

const Form: ForwardRefRenderFunction<Ref, Props> = (
  { children, ...rest },
  ref
) => {
  return (
    <form ref={ref} {...rest}>
      <div className="max-w-md mx-auto">{children}</div>
    </form>
  );
};

const forwaredForm = forwardRef(Form);

export default forwaredForm;
