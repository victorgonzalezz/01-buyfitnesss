import React from 'react';
import { HiOutlineShoppingCart as ShoppingCart } from 'react-icons/hi';

import { Heading, Container } from './styles';
import logo from '../../assets/img/buyfitness.png';

interface Props {
  textColor?: string;
}

const Header: React.FC<Props> = ({ textColor }) => {
  return (
    <Container>
      <img src={logo} alt="Logo" />
      <ShoppingCart size={36} color={textColor} />
    </Container>
  );
};

export default Header;
