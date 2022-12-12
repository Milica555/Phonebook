import React from 'react';
import Header from './components/header/Header';
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
      </div>
    );
  }
}

export default App;