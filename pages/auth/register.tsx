import { Layout } from "@components/common";
import { Form, Input } from "@components/form";
import { Button } from "@components/ui";
import { UilAt, UilUser, UilLock } from "@iconscout/react-unicons";
import { FormEvent, useRef } from "react";
import { useRouter } from "next/router";

const Register = () => {
  const registerForm = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const name = registerForm.current?.userName.value;
    const email = registerForm.current?.email.value;
    const password = registerForm.current?.password.value;

    const registerUser = async () => {
      const res = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.status === 201) {
        alert("User created successfully");
        router.push("/auth/login");
      }
    };

    if (!name || !email || !password)
      return alert("Fill all input boxes please");

    registerUser();
  };

  return (
    <Form ref={registerForm} method="POST" onSubmit={(e) => handleSubmit(e)}>
      <h1 className="text-center text-2xl font-bold text-gradient">
        Registration Form
      </h1>
      <Input label="Name" name="userName" icon={UilUser} />
      <Input
        label="Email"
        name="email"
        type="email"
        icon={UilAt}
        autoComplete="email"
      />
      <Input
        label="Password"
        name="password"
        type="password"
        icon={UilLock}
        autoComplete="current-password"
      />

      <Button className="mt-4">
        <span>Register</span>
      </Button>
    </Form>
  );
};

Register.Layout = Layout;

export default Register;
