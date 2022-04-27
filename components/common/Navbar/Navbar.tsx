import Link from "next/link";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={s.root}>
      <nav className={s.navbar}>
        <div className={s.logo}>
          <Link href="/">
            <a>KK</a>
          </Link>
        </div>

        <div className={s.navMenu}>
          <Link href="/auth/login">
            <a className={s.navLink}>Login</a>
          </Link>
          <Link href="/auth/register">
            <a className={s.navLink}>Register</a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
