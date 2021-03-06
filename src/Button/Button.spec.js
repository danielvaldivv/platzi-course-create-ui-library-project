import { render } from '@testing-library/react';
import Button from './Button';

describe('@components/Button', () => {

  it('Given a normal call it should render properly', () => {
    // arrange
    const { getByRole } = render(
        <Button type="button" />
    );

    // act
    const button = getByRole('button');

    // assert
    expect(button).toBeDefined();
  });

  it('Given className sent it should be combined with className of the component', () => {
    // arrange
    const { getByRole } = render(
        <Button type="button" className="foo" />
    );

    // act
    const button = getByRole('button');

    // assert
    expect(button).toHaveClass('foo');
  });

  it('Given the Button, when the props provide width attribute then the component will take those style', () => {
    // arrange
    const { getByRole } = render(
        <Button role="button"  width={'100%'}/>
    );

    // act
    const ButtonStyleTest = getByRole('button');

    // assert
    expect(ButtonStyleTest).toBeDefined();
    expect(ButtonStyleTest).toHaveStyle(`width: 100%`);
  });

  it('Given the Button, when the props provide height attribute then the component will take those style', () => {
    // arrange
    const { getByRole } = render(
        <Button role="button"  height={'30px'}/>
    );

    // act
    const ButtonStyleTest = getByRole('button');

    // assert
    expect(ButtonStyleTest).toBeDefined();
    expect(ButtonStyleTest).toHaveStyle(`height: 30px`);
  });

});