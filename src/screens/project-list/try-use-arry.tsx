import { useArray, useMount } from "utils";

export const TsReactTest = () => {
  const persons: Array<{ name: string; age: number }> = [
    { name: "jack", age: 25 },
    { name: "ma", age: 22 },
  ];

  const { value, clear, removeIndex, add } = useArray(persons);
  useMount(() => {
    // // 期待这里报错: Propertv 'notExist' does not exist on type
    // console.log(value.notExist);
    // // 期待这里报错：propertv 'age! is missing in type "{ name:
    // add({ name: "david" });
    // // 期待这里报错：Argument of type 'string'
    // removeIndex("123");
  });

  return (
    <div>
      {/* 期待：点击以后增加 john */}
      <button onClick={() => add({ name: "john", age: 22 })}>add john</button>
      {/* 期待：点击以后删除第一项 */}
      <button onClick={() => removeIndex(0)}>remove 0</button>
      {/* 期待：点击以后清空列表 */}
      <button style={{ marginBottom: "50px" }} onClick={() => clear()}>
        clear
      </button>
      {value.map((person: { age: number; name: string }, index: number) => (
        <div style={{ marginBottom: "30px" }}>
          <span style={{ color: "red" }}>{index}</span>
          <span>{person.name}</span>
          <span>{person.age}</span>
        </div>
      ))}
    </div>
  );
};
