import { render } from '@testing-library/react';
import Text from './Text';

describe('@components/Text', () => {
  it('Given a Tag of <h1> to <h6> It should Render a title text', () => {
    const { getByRole } = render(
        <Text component="h1">Hello World</Text>
    );

    const text = getByRole('heading', { name: /Hello World/i });
    expect(text).toBeDefined();
  });

  it('Given a Tag <p> It should Render a Paragraph', () => {
    const { getByText } = render(
        <Text component="p">Hello World</Text>
    );

    const text = getByText(/Hello World/i);
    expect(text).toBeDefined();
  });

  it('Given a Tag <span> It should Render a span', () => {
    const { getByText } = render(
        <Text component="span">Hello World</Text>
    );

    const text = getByText(/Hello World/i);
    expect(text).toBeDefined();
  });

  it('Given a Tag <textarea> It should Render a textarea', () => {
    const { getByRole } = render(
        <Text component="textarea" name="textarea" defaultValue="This is a description." />
    );

    const textarea = getByRole('textbox');
    expect(textarea).toBeDefined();
  });
});