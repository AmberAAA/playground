import { App, Button } from "antd";
import { add } from "./add";

export default function HomePage() {
  const { modal } = App.useApp();
  const open = () => {
    modal.confirm({
      content: "你确定?",
    });
  };
  console.log(add(1, 3));
  return (
    <div>
      <Button onClick={open}>弹窗国际化</Button>
    </div>
  );
}
