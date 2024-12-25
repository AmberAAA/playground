import { RouterInputs, trpc } from '@/utils/trpc';
import { App, Button, Form, Input, InputNumber, message } from 'antd';

type User = RouterInputs['addUser'];

export default function HomePage() {
  const { modal } = App.useApp();
  const open = () => {
    modal.confirm({
      content: '你确定?',
    });
  };
  const {data, refetch, isLoading, isError} = trpc.getUser.useQuery();
  const { mutateAsync, isPending  } = trpc.addUser.useMutation({onError(error, variables, context) {
    message.error(error.message);
  },});
  const [form] = Form.useForm<User>();

  const onSubmit = async () => {
    await form.validateFields();
    const v = form.getFieldsValue();
    await mutateAsync(v);
    refetch();
  }
  
  return (
    <div>
      <Button onClick={open}>弹窗国际化</Button>
      {isLoading ?? 'loading'}
      {isError ?? 'error'}
      {data && (
        <ol>
          {data.map((i) => (
            <li key={i.email}>
              {i.name} - {i.age} - {i.email}
            </li>
          ))}
        </ol>
      )}

      <Form<User> form={form}>
        <Form.Item label="name" name="name" required>
          <Input />
        </Form.Item>
        <Form.Item label="age" name="age" required>
          <InputNumber />
        </Form.Item>
        <Form.Item label="email" name="email" required>
          <Input  type='email'/>
        </Form.Item>
        <Button loading={isLoading || isPending} onClick={onSubmit}>
          提交
        </Button>
      </Form>
    </div>
  );
}
