import { Layout } from "@components/common";
import { Form, Input } from "@components/form";
import { Button } from "@components/ui";
import { UilAt, UilUser, UilLock } from "@iconscout/react-unicons";

const Register = () => {
  return (
    <Form>
      <h1 className="text-center text-2xl font-bold">Registration Form</h1>
      <Input label="Name" icon={UilUser} />
      <Input label="Email" type="email" icon={UilAt} />
      <Input label="Password" type="password" icon={UilLock} />

      <Button className="mt-4">
        <span>Register</span>
      </Button>
    </Form>
  );
};

Register.Layout = Layout;

export default Register;
