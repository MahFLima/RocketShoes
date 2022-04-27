import React from 'react';
import Shoes from '../../assets/logo.svg';
import Bag from '../../assets/icon-bag.svg';
import Lupa from '../../assets/icon-search.svg';

import { Container, IconShoes, Menu, InputSearch, IconBag, IconSearch } from './styles';

const Header: React.FC = () => {
  return (
    <Container>

      <IconShoes src={Shoes}/>
      <Menu>
        <li>
          <a href="">HOMEM</a>
        </li>
        <li>
          <a href="">MULHER</a>
        </li>
        <li>
          <a href="">CRIANÇA</a>
        </li>
        <li>
          <a href="">CUSTOMIZAR</a>
        </li>
      </Menu>
      <div>
        <IconSearch src={Lupa}/>
        <InputSearch type="text" placeholder="Pesquisar"/>
      </div>
      <IconBag src={Bag}/>
    </Container>
  );
}

export default Header;