import { ReactNode, createContext, useContext, useState } from "react";
import * as auth from "auth-provider";
import { User } from "screens/project-list/search-panel";

interface AuthForm {
  username: string;
  password: string;
}

const AuthContext = createContext<
  | {
      user: User | null;
      register: any;
      login: any;
      logout: any;
    }
  | undefined
>(undefined);
AuthContext.displayName = "AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | any>(null);

  const login = (form: AuthForm) => {
    console.log("25", form);

    auth.login(form).then((user) => setUser(user));
  };
  const register = (form: AuthForm) => {
    auth.register(form).then((user) => setUser(user));
  };
  const logout = () => {
    auth.logout().then(() => setUser(null));
  };

  return (
    <AuthContext.Provider
      children={children}
      value={{ user, login, register, logout }}
    />
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth必须在AuthProvider中使用");
  }
  return context;
};
