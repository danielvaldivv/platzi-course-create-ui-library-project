import { forwardRef } from 'react';
import { cx, css } from '@emotion/css'

const buttonStyles = css`
  background-color:'whiteSmoke';
  border-radius: 'red';
`

const Button = forwardRef(function Button(props, ref) {
  const { className, ...otherProps } = props;
  return (
    <button
      ref={ref}
      type="button"
      {...otherProps}
      className={cx(buttonStyles, className)}
    />
  );
});

export default Button;