import { forwardRef } from 'react';
import { cx, css } from '@emotion/css'

const buttonStyles = (width, height, bgColor, color, bgColorHover, colorHover, borderRadius) => css`
  background-color: ${bgColor};
  color: ${color};
  border-radius: ${borderRadius || "8px"};
  width: ${width || '150px' };
  height: ${height || '40px'};
  text-align: center;
  &:hover{
    background-color: ${bgColorHover};
    color: ${colorHover}
  }
`

const Button = forwardRef((props, ref) => {
  const { className, width, height, bgColor, color, bgColorHover, colorHover, borderRadius, ...otherProps } = props;
  return (
    <button
      ref={ref}
      type="button"
      {...otherProps}
      className={cx(buttonStyles(width, height, bgColor, color, bgColorHover, colorHover, borderRadius), className)}
    />
  );
});

export default Button;