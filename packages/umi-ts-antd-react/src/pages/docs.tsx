import { useCounter } from "ahooks";

const DocsPage = () => {

  const [count, {inc, reset}] =  useCounter(0)

  const onClick = () => {
    inc()
  }

  return (
    <div>
      <p onClick={onClick}>This is umi docs. {count}</p>
    </div>
  );
};

export default DocsPage;
