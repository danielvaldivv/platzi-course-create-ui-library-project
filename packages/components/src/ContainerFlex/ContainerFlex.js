import { forwardRef } from 'react';
import { cx, css } from '@emotion/css'
import { PropTypes } from 'prop-types';

const ContainerFlexStyles = (width, height, bgColor, flexDirection) => css`
  background-color: ${bgColor};
  width: ${width || '100%' };
  height: ${height || '100%'};
  display: flex;
  flex-direction: ${flexDirection};
`

const ContainerFlex = forwardRef((props, ref) => {
  const { className, width, height, bgColor, flexDirection, ...otherProps } = props;
  return (
    <section
      ref={ref}
      {...otherProps}
      className={cx(ContainerFlexStyles(width, height, bgColor, flexDirection), className)}
    />
  );
});

ContainerFlex.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  bgColor: PropTypes.string,
  className: PropTypes.string,
  flexDirection: PropTypes.oneOf(['column', 'column-reverse', 'row', 'row-reverse'])
};

export default ContainerFlex;