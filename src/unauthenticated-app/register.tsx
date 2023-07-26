import React from "react";
import { useAuth } from "../context/auth-context";
import { FormEvent } from "react";

export const RegisterScreen = () => {
  // const login = (param: { username: string; password: string }) => {};
  const { register, user } = useAuth();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const username = (evt.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (evt.currentTarget.elements[1] as HTMLInputElement).value;
    register({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id="usrname"></input>
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input type="text" id="password"></input>
      </div>
      <button type="submit">注册</button>
    </form>
  );
};
