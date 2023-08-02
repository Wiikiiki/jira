import { useState, useEffect } from "react";
import { Typography } from "antd";
import styled from "@emotion/styled";
import { SearchPanel } from "./search-panel";
import { List, Project } from "./list";
import { cleanObject, useDebounce, useMount } from "utils";
import { useHttp } from "utils/http";
import { useAsync } from "utils/use-async";

export const ProjectScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [users, setUsers] = useState([]);
  const debouncedParam = useDebounce(param, 1000);

  const client = useHttp();
  const { run, isLoading, error, data: list } = useAsync<Project[]>();

  useEffect(() => {
    run(client("projects", { data: cleanObject(debouncedParam) }));
  }, [debouncedParam]);

  useMount(() => {
    client("users").then(setUsers);
  });

  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel param={param} setParam={setParam} users={users} />
      {error ? (
        <Typography.Text type={"danger"}>{error.message}</Typography.Text>
      ) : null}
      <List loading={isLoading} dataSource={list || []} users={users} />
    </Container>
  );
};

const Container = styled.div`
  padding: 3.2rem;
`;
