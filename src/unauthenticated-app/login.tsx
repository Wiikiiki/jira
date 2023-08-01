import { Form, Input } from "antd";
import { useAuth } from "../context/auth-context";
import { LongButton } from "unauthenticated-app/index";

export const LoginScreen = () => {
  // const login = (param: { username: string; password: string }) => {};
  const { login } = useAuth();

  // const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
  //   evt.preventDefault();
  //   const username = (evt.currentTarget.elements[0] as HTMLInputElement).value;
  //   const password = (evt.currentTarget.elements[1] as HTMLInputElement).value;
  //   login({ username, password });
  // };

  const handleSubmit = (values: { username: string; password: string }) => {
    login(values);
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        name={"username"}
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        <Input placeholder="用户名" type="text" id="usrname" />
      </Form.Item>
      <Form.Item
        name={"password"}
        rules={[{ required: true, message: "请输入密码" }]}
      >
        <Input placeholder="密码" type="text" id="password" />
      </Form.Item>
      <Form.Item>
        <LongButton htmlType="submit" type="primary">
          登录
        </LongButton>
      </Form.Item>
    </Form>
  );
};
