import { createContext } from "react";
import { User } from "../../types/user";

export type AuthContextType = {
  user: User | null;
  signin: (email: string, password: string) => Promise<boolean>;
};

export const AuthContext = createContext<AuthContextType>(null!);
