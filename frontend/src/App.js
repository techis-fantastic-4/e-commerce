import React from 'react'
import Router from './Router'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import "./assets/style.css"

function App() {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
}

export default App;
