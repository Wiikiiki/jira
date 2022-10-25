// import React, { ReactNode, useState } from "react";
// import * as auth from "auth-provider";
import { User } from "screens/project-list/search-panel";

interface AuthForm {
  username: string;
  password: string;
}
const AuthContext = React.createContext<
  | {
      user: User | null;
      register: (form: AuthForm) => Promise<void>;
      login: (form: AuthForm) => Promise<void>;
      logout: () => Promise<void>;
    }
  | undefined
>(undefined);
AuthContext.displayName = "AuthContext";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [user, setUser] = useState<User | null>(null);

//   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//   const register = (form: AuthForm) => auth.register(form).then(setUser);
//   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//   const login = (form: AuthForm) => auth.login(form).then(setUser);
//   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/promise-function-async
//   const logout = (form: AuthForm) => auth.logout().then(() => setUser(null));

//   return (
//     <AuthContext.Provider
//       children={children}
//       value={{ user, register, login, logout }}
//     />
//   );
// };

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context == null) {
    throw new Error("useAuth必须在AuthProvider中使用");
  }
  return context;
};
