import React from 'react'
import {Container} from '../components/styles/Container.styled'
import {Flex} from  '../components/styles/Flex.styled'
import { StyledFooter } from './styles/Footer.styled'
import logo2 from '../components/Images/logo2.svg'
export function Footer(props) {
    

    return (
        <>
           <StyledFooter>
            <Container>
                <img src={logo2}/>
                <Flex>
                    <ul>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
                    <li>+1 -543-137-5678</li>
                    <li>example@.huddle.com</li>
                    </ul>
                    <ul>
                        <li>About us</li>
                        <li>FAG</li>
                        <li>Blog</li>
                    </ul>
                    <ul>
                        <li>What We Do</li>
                        <li>Carrier</li>
                        <li>Contact Us</li>
                    </ul>
                </Flex>
                <p>&Copy; 2022 Huddle. All rights reserved. </p>
            </Container>
            </StyledFooter> 
        </>
    )
}
