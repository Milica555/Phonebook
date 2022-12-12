import React from 'react';
import { Container } from "react-bootstrap";

import './Header.css';

function Header() {
  return (
    <header>
       <Container className="align-items-center" style={{width: 600 }}>   
          <div className="header-cell">
            PHONEBOOK
          </div>
      </Container>
    </header>
  );
}

export default Header;