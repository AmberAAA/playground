import { Button } from 'antd';

export interface IMyLabelProps {
  name: string;
  onClick?: () => void;
  hasError?: boolean;
}
const MyLabel = (props: IMyLabelProps) => {
  return (
    <div>
      <p data-testid="label">{props.name}</p>
      <Button onClick={props.onClick}>{props.name}</Button>
      {props.hasError && <p id="error"></p>}
    </div>
  );
};

export default MyLabel;
