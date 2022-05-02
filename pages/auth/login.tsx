import { Layout } from "@components/common";
import { Input, Form } from "@components/form";
import { Button } from "@components/ui";
import { UilAt, UilLock } from "@iconscout/react-unicons";
import { useRouter } from "next/router";
import { FormEvent, useRef } from "react";
import { useDispatch } from "react-redux";
import { login } from "@store/user/userSlice";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const loginRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const email = loginRef.current?.email.value;
    const password = loginRef.current?.password.value;

    if (!email || !password) return alert("Complete please");

    const loginMutation = async () => {
      const res = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Access-Control-Allow-Credentials": "http://localhost:3000",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (res.status === 200) {
        alert("Login success");
        const { data } = await res.json();
        dispatch(login(data));

        router.push("/");
      }
    };

    loginMutation();
  };

  return (
    <Form ref={loginRef} method="POST" onSubmit={(e) => handleSubmit(e)}>
      <h1 className="text-center text-2xl font-bold text-gradient">
        Login Form
      </h1>
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
