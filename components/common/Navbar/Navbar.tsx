import Link from "next/link";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div>logo</div>

        <div>
          <Link href="/auth/login">
            <a>Login</a>
          </Link>
          <Link href="/auth/register">
            <a>Register</a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
