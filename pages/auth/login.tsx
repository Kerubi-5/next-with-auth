import { Layout } from "@components/common";
import { Input } from "@components/form";
import { Button } from "@components/ui";
import { UilAt, UilLock } from "@iconscout/react-unicons";

const Login = () => {
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-center text-2xl font-bold">Login Form</h1>
      <Input label="Email" type="email" icon={UilAt} />
      <Input label="Password" type="password" icon={UilLock} />

      <Button className="mt-4">
        <span>Login</span>
      </Button>
    </div>
  );
};

Login.Layout = Layout;

export default Login;
