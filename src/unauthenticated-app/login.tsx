import { useAuth } from "context/auth-context";
import { FormEvent } from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const apiUrl = process.env.REACT_APP_API_URL;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const LoginScreen = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { login, user } = useAuth();

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    login({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id={"username"}></input>
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input type="password" id={"password"}></input>
      </div>
      <button type="submit">登录</button>
    </form>
  );
};
