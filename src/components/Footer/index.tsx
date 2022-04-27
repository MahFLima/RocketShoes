import React from "react";
import ReactPlayer from "react-player/lazy";
import arrow from "../../assets/icon-arrow.svg";
import shoes3 from "../../assets/tenis-3-galeria.png";


import { Container, MenuSocial, Explorer, MenuSocialResponsive, IconInstagram, IconYoutube, IconFacebook, IconTwitter} from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <img src={shoes3}/>
      {/* <ReactPlayer width="300px" height="100%" controls url="https://www.youtube.com/watch?v=S5Qvi23VqaQ"/> */}
      
      <MenuSocialResponsive>
        <IconFacebook/>
        <IconInstagram/>
        <IconYoutube/>
        <IconTwitter/>
      </MenuSocialResponsive>
      
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
