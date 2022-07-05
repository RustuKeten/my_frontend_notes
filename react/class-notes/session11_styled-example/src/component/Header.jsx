import Button from "./styles/Button.styled";
import Container from "./styles/Container.styled";
import StyledHeader, { Logo, Nav } from "./styles/Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.png"></Logo>
          <div>
            <Button color="#A62440">Apply Courses</Button>
            <Button bg="#A62440">Talk to Advisor</Button>
          </div>
        </Nav>
        <div>
          <h1>The IT Career of Your Dreams Starts Here!</h1>
          <p>
            Clarusway is a leading international software Bootcamp. Join a micro
            class online with other trainees and learn coding skills with a
            highly-skilled instructor.
          </p>
          <Button bg="#A62440">Start Your New Carier</Button>
          <Image src="./images/hero.png"></Image>
        </div>
      </Container>
    </StyledHeader>
  );
};

export default Header;
