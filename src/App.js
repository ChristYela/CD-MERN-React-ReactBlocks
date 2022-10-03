import React from 'react';
import Header from "./Components/Header";
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import SubContents from "./Components/SubContents";
import Advertisement from './Components/Advertisement';
import Bottom from './Components/Bottom';
import Sub from './Components/Sub';
import Container from './Components/Container';

function App() {
  return (
    <div className="app">
      <Container>
        <Header/>
        <Bottom>
          <Navigation/>
          <Main>
            <Sub>
              <SubContents/>
              <SubContents/>
              <SubContents/>
            </Sub>
            <Advertisement/>
          </Main>
        </Bottom>
      </Container>
    </div>
  );
}

export default App;