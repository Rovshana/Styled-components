import styled from "styled-components";
export const StyledCard  =  styled.div`
display: flex;
align-items: center;
background-color: #fff;
border-radius: 15px;
margin: 40px 0;
padding: 60px;

img {
    width: 80%
}
& >div{
    flex: 1
}
@media(max-width: ${({theme})=>theme.mobile}){
    flex-direction: column;
}

`