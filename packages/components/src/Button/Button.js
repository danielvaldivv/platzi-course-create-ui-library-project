import { forwardRef } from 'react';
import { cx, css } from '@emotion/css'

const buttonStyles = (width) => css`
  background-color:'whiteSmoke';
  border-radius: 'red';
  width: ${width || '30%' };
`

const Button = forwardRef(function Button(props, ref) {
  const { className, width, ...otherProps } = props;
  return (
    <button
      ref={ref}
      type="button"
      {...otherProps}
      className={cx(buttonStyles(width), className)}
    />
  );
});

export default Button;