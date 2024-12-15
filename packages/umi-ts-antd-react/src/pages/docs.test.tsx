import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DocsPage from './docs';

describe('docs.tsx', () => {
  it('render', () => {
    const node = render(<DocsPage />);
    const include = node.container
      .querySelector('p')
      ?.textContent?.includes('This is umi docs');
    const json = node.container.outerHTML;
    expect(include).toBeTruthy();
    expect(json).toMatchSnapshot();
  });

  it('click', async () => {
    render(<DocsPage />);
    expect(screen.getByText('0', { exact: false })).toBeTruthy();
    await userEvent.click(screen.getByText('umi', { exact: false }));
    expect(screen.getByText('1', { exact: false })).toBeTruthy();
  });

  it('click', () => {
    expect(1).toBe(1);
  });
});
