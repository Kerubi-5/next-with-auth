import { Layout } from "@components/common";
import { Input } from "@components/form";
import { Button } from "@components/ui";
import { UilAt, UilUser, UilLock } from "@iconscout/react-unicons";

const Register = () => {
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-center text-2xl font-bold">Registration Form</h1>
      <Input label="Name" icon={UilUser} />
      <Input label="Email" type="email" icon={UilAt} />
      <Input label="Password" type="password" icon={UilLock} />

      <Button className="mt-4">
        <span>Register</span>
      </Button>
    </div>
  );
};

Register.Layout = Layout;

export default Register;
