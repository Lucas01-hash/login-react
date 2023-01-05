import { useContext } from "react";
import { Login } from "../../pages/Login";
import { AuthContext } from "./AuthContext";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useContext(AuthContext);
  console.log("auth", auth);
  if (!auth.user) {
    return <Login />;
  }
  return children;
};
