import React from "react";
import shoes from "../../assets/tenis-1-ampliado.png";
import shoes1 from "../../assets/tenis-1-galeria.png";
import shoes2 from "../../assets/tenis-2-galeria.png";
import shoes3 from "../../assets/tenis-3-galeria.png";

import { Container, Price, Main, ImgShoes, ContentShoes } from "./styles";

const Page: React.FC = () => {
  return (
    <Container>
      <Price>
        <div>
          <h1>Tênis Esportivo Para Corrida Top</h1>
          <p>
            Esse tênis tem o intuito de te deixar ainda mais fitness, focado, e
            musculoso.
          </p>
          <h3>R$ 1.000,00</h3>
          <button>COMPRAR</button>
        </div>
      </Price>
      <Main>
        <ImgShoes src={shoes} />
        <ContentShoes>
          <img src={shoes1} alt="" />
          <img src={shoes2} alt="" />
          <img src={shoes3} alt="" />
        </ContentShoes>
      </Main>
    </Container>
  );
};

export default Page;
