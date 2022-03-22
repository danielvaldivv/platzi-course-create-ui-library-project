import { render } from '@testing-library/react';
import ContainerFlex from './ContainerFlex';

describe('@components/ContainerFlex', () => {

  it('Given className sent it should be combined with className of the component', () => {
    // arrange
    const { getByRole } = render(
        <ContainerFlex role="banner" className="foo" />
    );

    // act
    const ContainerFlexTestClassName = getByRole('banner');

    // assert
    expect(ContainerFlexTestClassName).toBeDefined();
    expect(ContainerFlexTestClassName).toHaveClass('foo');

  });

  it('Given the ContainerFlex, when the props provide width attribute then the component will take those style', () => {
    // arrange
    const { getByRole } = render(
        <ContainerFlex role="banner"  bgColor={'#ffffff'}/>
    );

    // act
    const ContainerFlexStyleTest = getByRole('banner');

    // assert
    expect(ContainerFlexStyleTest).toBeDefined();
    expect(ContainerFlexStyleTest).toHaveStyle(`background-color: #ffffff`);
  });

});