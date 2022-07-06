import Button, { RustuButton, TomatoButton } from "./components/Button.styled";
import Container from "./components/Container.styled";
import HeaderText from "./components/Header.styled";
import StyledLink from "./components/Link.styled";

const App = () => {
  return (
    <>
      <Container bg="blue">
        <HeaderText>STYLED COMPONENTS</HeaderText>
        <Button primary>Click</Button>
        <Button>Click</Button>
        <TomatoButton>Click</TomatoButton>
        <TomatoButton primary>Click</TomatoButton>
        <RustuButton primary>Klicddk</RustuButton>
        <HeaderText color="white">STYLED COMPONENTS</HeaderText>
        <StyledLink href="https://clarusway.com/" target="_blank">
          Clarusway
        </StyledLink>
        <StyledLink secondary href="https://clarusway.com/" target="_blank">
          Clarusway
        </StyledLink>
      </Container>
    </>
  );
};

export default App;