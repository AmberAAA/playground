import { App, Button } from "antd";
import yayJpg from "../assets/yay.jpg";

export default function HomePage() {
  const { modal } = App.useApp();
  const open = () => {
    modal.confirm({
      content: "你确定?",
    });
  };
  return (
    <div>
      <Button onClick={open}>弹窗国际化</Button>
    </div>
  );
}
