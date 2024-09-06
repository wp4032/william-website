import React from 'react'
import { Navbar, Skills, Spotify } from './components';
import { Footer, Header } from './containers';
import './App.css';

const App = () => {
  return (
    <div className="App">
        <div>
            <Navbar />
        </div>
        <Header />
        <Skills />
        <Spotify />
        {/* <News /> */}
        <Footer />
    </div>
  )
}

export default App