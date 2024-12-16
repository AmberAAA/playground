import { fireEvent, render, screen } from '@testing-library/react';
import MyLabel, { IMyLabelProps } from './MyLabel';

describe('MyLabel', () => {
  it('test hasError', () => {
    const props: IMyLabelProps = {
      name: 'age',
      hasError: false,
    };
    const node = render(<MyLabel {...props} />);
    expect(node.container.querySelector('#error')).toBeFalsy();
    props.hasError = true;
    node.rerender(<MyLabel {...props} />);
    expect(node.container.querySelector('#error')).toBeTruthy();
  });

  it('onClick', () => {
    const fn = jest.fn();
    const node = render(<MyLabel onClick={fn} name="Amber" />);
    fireEvent.click(node.container.querySelector('button')!);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('data-testid', () => {
    const node = render(<MyLabel name="amber" />);
    screen.getByTestId('label');
    expect(screen.getByTestId('label')).toBeTruthy();
  });
});
