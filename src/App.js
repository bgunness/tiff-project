import React from 'react';
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

function App() {
  // when calling api, 
  const api_key = process.env.REACT_APP_API_KEY

  return (
    <div className='page'>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;