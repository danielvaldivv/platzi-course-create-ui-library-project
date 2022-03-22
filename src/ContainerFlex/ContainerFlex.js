import { forwardRef } from 'react';
import { cx, css } from '@emotion/css'
import { PropTypes } from 'prop-types';

const ContainerFlexStyles = (width, height, bgColor, flexDirection,  alignContent, justifyContent, alignItems) => css`
  background-color: ${bgColor};
  width: ${width || '100%' };
  height: ${height || '100%'};
  display: flex;
  flex-direction: ${flexDirection};
  align-content: ${alignContent } ;
  justify-content: ${justifyContent} ;
  align-items: ${alignContent };
`

const ContainerFlex = forwardRef((props, ref) => {
  const {
    className,
    width,
    height,
    bgColor,
    flexDirection,
    alignContent,
    justifyContent, 
    alignItems,
    ...otherProps } = props;
  return (
    <section
      ref={ref}
      {...otherProps}
      className={cx(ContainerFlexStyles(width, height, bgColor, flexDirection, alignContent, justifyContent, alignItems), className)}
    />
  );
});

ContainerFlex.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  bgColor: PropTypes.string,
  className: PropTypes.string,
  flexDirection: PropTypes.oneOf(['column', 'column-reverse', 'row', 'row-reverse']),
  alignContent: PropTypes.oneOf(['center', 'flex-start', 'flex-end', 'space-around', 'space-between', 'stretch']),
  justifyContent: PropTypes.oneOf(['center', 'flex-start', 'flex-end', 'space-around', 'space-between', 'space-evenly']),
  alignItems: PropTypes.oneOf(['center', 'flex-start', 'flex-end', 'stretch']),
};

export default ContainerFlex;