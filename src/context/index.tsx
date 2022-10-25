import { ReactNode } from "react";
import { AuthProvider } from "./auth-context";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const AppProviders = ({ children }: { children: ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
