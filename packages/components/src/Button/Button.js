import { forwardRef } from 'react';
import { cx, css } from '@emotion/css'

const buttonStyles = (width, height) => css`
  background-color: '#121f3d';
  color: '#ffffff';
  border-radius: 'red';
  width: ${width || '30%' };
  height: ${height || '15px'};
  text-align: center;
  &:hover{
    background-color: '#98ca3f';
    color: 'white'
  }
`

const Button = forwardRef((props, ref) => {
  const { className, width, height, ...otherProps } = props;
  return (
    <button
      ref={ref}
      type="button"
      {...otherProps}
      className={cx(buttonStyles(width, height), className)}
    />
  );
});

export default Button;