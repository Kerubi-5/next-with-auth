import { Layout } from "@components/common";
import { Form, Input } from "@components/form";
import { Button } from "@components/ui";
import { UilAt, UilUser, UilLock } from "@iconscout/react-unicons";
import { Router } from "next/router";

const Register = () => {
  const handleSubmit = () => {};

  return (
    <Form method="POST" action="http://localhost:8080/api/auth/login">
      <h1 className="text-center text-2xl font-bold text-gradient">
        Registration Form
      </h1>
      <Input label="Name" name="name" icon={UilUser} />
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
