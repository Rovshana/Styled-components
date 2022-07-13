import './App.css';
import {ThemeProvider}  from "styled-components";
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { Card } from './components/Card';
import {Container} from './components/styles/Container.styled'
import GlobalStyle from './components/styles/Global';
import {content} from './Content.js'

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff', 
    footer: '#003333'
  },
  mobile: '768px'

  
  
}
function App() {
  return (
    <ThemeProvider theme={theme}>
     <GlobalStyle/>
    <>
    <Header/>
    <Container>
      <div>
    {content?.map((el, index)=>(
 <Card key={index} el={el}/>
    ))}
    </div>
    </Container>
    <Footer/>
    </>
    </ThemeProvider>
  );
}

export default App;
