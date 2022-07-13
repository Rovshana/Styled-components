import React from "react";
import { Container } from "./styles/Container.styled";
import { StyledHeader, Nav, Image, Logo } from "./styles/StyledHeader.styled";
import logo1 from "../components/Images/logo1.svg";
import { Button } from "../components/styles/Button.styled";
import { Flex } from "../components/styles/Flex.styled";
import headImg from "../components/Images/headImg.svg"



export function Header(props) {
  return (
    <>
      <StyledHeader>
        <Container>
          <Nav>
            <Logo src={logo1} alt="..." />
            <h3>Huddle</h3>
            <Button>Try it free</Button>
          </Nav>
          <Flex>
            <div>
              <h1>Build The Community Your Fans Will Love</h1>
              <p>
                Huddle re-imagines the way we build communities. You have a
                voice, but so does your audience. Create connections with your
                users as you engage in genuine discussion.
              </p>
              <Button bg='#ff0099' color="#fff">Get started for free!</Button>
            </div>
            <div>
                <Image src={headImg} alt="..." />
            </div>
          </Flex>
        </Container>
      </StyledHeader>
    </>
  );
}
