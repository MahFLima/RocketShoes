import React from "react";
import arrow from "../../assets/icon-arrow.svg";
import ReactPlayer from 'react-player';

import { Container, MenuSocial, Explorer } from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <ReactPlayer width="300px" height="100%" controls url="https://www.youtube.com/watch?v=S5Qvi23VqaQ"/>
      <MenuSocial>
        <li>
          <a href="">FACEBOOK</a>
        </li>
        <li>
          <a href="">INSTAGRAM</a>
        </li>
        <li>
          <a href="">YOUTUBE</a>
        </li>
        <li>
          <a href="">TWITTER</a>
        </li>
      </MenuSocial>
      <Explorer>
        EXPLORE MAIS
        <img src={arrow} />
      </Explorer>
    </Container>
  );
};

export default Footer;
