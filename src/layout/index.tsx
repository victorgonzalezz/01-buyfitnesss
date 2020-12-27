import React from 'react';

import { WrapperContainer } from './styles';

const Layout: React.FC = ({ children }) => {
  return <WrapperContainer id="layout">{children}</WrapperContainer>;
};

export default Layout;
