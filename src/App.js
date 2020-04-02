import React from 'react';
import './styles/index.scss';
import { Header } from './components/header';
import { Home } from './containers/home';


function App() {
  return (
      <>
        <Header />
        <main className='site-main'>
          <Home />
        </main>
      </>

  );
}

export default App;
