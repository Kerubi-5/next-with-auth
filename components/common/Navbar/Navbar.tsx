import Link from "next/link";
import s from "./Navbar.module.css";
import Cookies from "js-cookie";
import { Button } from "@components/ui";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "@store";
import { logout } from "@store/user/userSlice";
const Navbar = () => {
  const { token } = useSelector(selectUser);
  const dispatch = useDispatch();
  const router = useRouter();
  const logout = () => {
    dispatch(logout());
    Cookies.remove("authToken");
    router.push("/auth/login");
  };
  return (
    <header className={s.root}>
      <nav className={s.navbar}>
        <div className={s.logo}>
          <Link href="/">
            <a>KK</a>
          </Link>
        </div>

        <div className={s.navMenu}>
          {token ? (
            <>
              <Button onClick={logout}>Logout</Button>
            </>
          ) : (
            <>
              <Link href="/auth/login">
                <a className={s.navLink}>Login</a>
              </Link>
              <Link href="/auth/register">
                <a className={s.navLink}>Register</a>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
