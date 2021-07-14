import React from 'react'
import Router from './Router'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import "./assets/style.css"

function App() {
  return (
    <React.Fragment>
      <Header />
      <Router />
      <Footer />
    </React.Fragment>
  );
}

export default App;
