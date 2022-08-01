import React, { PropsWithChildren } from 'react';

export interface ButtonProps {
  color: string;
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({ color, children }) => (
  <button type="button" className={color}>
    {children ?? 'Click'}
  </button>
);

export default Button;
