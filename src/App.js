import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Phonebook from './components/Phonebook';
import { setToLocalStorage, getFromLocalStorage } from './components/StorageHelper';

class App extends React.Component {
  render() {
    setToLocalStorage();
    let storedPhoneBooks = getFromLocalStorage();
    return (
      <div>
        <Header/>
        <Phonebook phonebooks={storedPhoneBooks}/>
        <Footer/>
      </div>
    );
  }
}

export default App;