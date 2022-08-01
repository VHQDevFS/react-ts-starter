import React, { PropsWithChildren } from 'react';

const Button: React.FC<PropsWithChildren> = ({ children }) => (
  <button type="button">{children ?? 'Click'}</button>
);

export default Button;
