import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { User } from "../../types/user";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null);
  const api = useApi();

  const signin = async (email: string, password: string) => {
    const data = await api.signin(email, password);

    if (!data.access_token) {
      return false;
    }

    const thisUser = await api.findUser(data.access_token);
    if (thisUser) {
      setUser(thisUser);
    }

    localStorage.setItem("Peditz@token", data.access_token);
    return true;
  };


  return (
    <AuthContext.Provider value={{ user, signin }}>
      {children}
    </AuthContext.Provider>
  );
};
