// 模拟第三方服务

import { User } from "screens/project-list/search-panel";

const apiUrl = process.env.REACT_APP_API_URL;

const localStorageKey = "__auth_provider_token__";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getToken = () => window.localStorage.getItem(localStorageKey);

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const handleUserResponse = ({ user }: { user: User }) => {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  window.localStorage.setItem(localStorageKey, user.token || "");
  return user;
};

// 登录

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const login = (data: { username: string; password: string }) => {
  // eslint-disable-next-line @typescript-eslint/no-floating-promises, @typescript-eslint/restrict-template-expressions
  fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (response: Response) => {
    // eslint-disable-next-line no-empty
    if (response.ok) {
      return handleUserResponse(await response.json());
    }
  });
};

// 注册

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const register = (data: { username: string; password: string }) => {
  // eslint-disable-next-line @typescript-eslint/no-floating-promises, @typescript-eslint/restrict-template-expressions
  fetch(`${apiUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (response: Response) => {
    // eslint-disable-next-line no-empty
    if (response.ok) {
      return handleUserResponse(await response.json());
    }
  });
};

// 登出

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const logout = () => window.localStorage.removeItem(localStorageKey);
