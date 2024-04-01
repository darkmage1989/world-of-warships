import Head from "./components/Head/Head";
import ShipsListBlock from "./components/ShipsListBlock/ShipsListBlock";
import { MainPageStyled } from "./styles";
const Main = () => {
  return (
    <MainPageStyled>
      <Head />
      <ShipsListBlock />
    </MainPageStyled>
  );
};

export default Main;
