import { Layout } from "@components/common";
import { Input, Form } from "@components/form";
import { Button } from "@components/ui";
import { UilAt, UilLock } from "@iconscout/react-unicons";
import { useRef } from "react";

const Login = () => {
  const loginRef = useRef<HTMLFormElement>(null);

  const handleSubmit = () => {
    // Prevent submit default
    if (loginRef.current) {
      loginRef.current.preventDefault();
    }
  };
  return (
    <Form ref={loginRef} method="POST" onSubmit={handleSubmit}>
      <h1 className="text-center text-2xl font-bold">Login Form</h1>
      <Input label="Email" name="email" type="email" icon={UilAt} />
      <Input label="Password" name="password" type="password" icon={UilLock} />

      <Button className="mt-4">
        <span>Login</span>
      </Button>
    </Form>
  );
};

Login.Layout = Layout;

export default Login;
