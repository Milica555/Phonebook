import React from "react";
import { Button, Form, Row, Col, Container, ListGroup, ListGroupItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { setToLocalStorage, removeFromLocalStorage, getFromLocalStorage } from "./StorageHelper";

class Phonebook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           name: "",
           number: "",
           phonebooks: this.props.phonebooks
        };

        this.setNameInput = this.setNameInput.bind(this);
        this.setNumberInput = this.setNumberInput.bind(this);
        this.submitHandle = this.submitHandle.bind(this);
        this.setPhoneBooks = this.setPhoneBooks.bind(this);
        this.submitRemove = this.submitRemove.bind(this);
        this.setFields = this.setFields.bind(this);
    }

    setNameInput (value) {
        this.setState({ name: value});
    }

    setNumberInput (value) {
        this.setState({ number: value});
    }

    submitHandle (event) {
        event.preventDefault();
        if (this.state.name !== "" && this.state.number !== "") {            
            setToLocalStorage({name: this.state.name, number: this.state.number});            
            this.setFields({name: "", number: ""})
            this.setPhoneBooks(getFromLocalStorage());
        }
    }    

    setPhoneBooks(value) {
        this.setState({ phonebooks: value });
    }    

    submitRemove (event) {
        event.preventDefault();
        removeFromLocalStorage({name: this.state.name});
        this.setFields({name: "", number: ""})
        this.setPhoneBooks(getFromLocalStorage());
    }

    setFields (value) {
        this.setNameInput(value.name);
        this.setNumberInput(value.number);
    }   

    render() {
        let removeContacts;
        if (this.state.phonebooks.length != 0 ) {
            removeContacts = 
                <Container onSubmit={(e) => this.submitRemove(e)} style={{ width: 600 }}>  
                    <Form> 
                        <Button id="removeButton" variant="primary" type="submit">
                            Remove Contact
                        </Button>
                    </Form>
                </Container>;
        }
        return (
            <>
            <Container onSubmit={(e) => this.submitHandle(e)} style={{width: 600 }}>            
                <Form> 
                    <Form.Group as={Col}>
                        <Form.Label style={{ marginTop: 20 }}>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Add Name"
                            value={this.state.name}
                            onChange={(e) => this.setNameInput(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label style={{ marginTop: 20 }}>Phone Number</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Add Number"
                            value={this.state.number}
                            onChange={(e) => this.setNumberInput(e.target.value)}
                        />
                    </Form.Group>

                    <Button id="addButton" style={{ marginTop: 20 }} variant="primary" type="submit">
                        Add Contact
                    </Button>
                </Form>
            </Container>

            
            <Container style={{width: 600, marginTop: 40, }}>
            {              
                this.state.phonebooks.map(function(phonebook, idx){
                    return (
                       
                        <ListGroup 
                            style={{ 
                                marginTop: 10,
                                
                            }} 
                            className="mb-3 align-items-center"
                            onClick={() => this.setFields(phonebook)}
                            >
                            <ListGroupItem
                                key={idx}
                                > {phonebook.name}, {phonebook.number}
                            </ListGroupItem>
                        </ListGroup>
                       
                    )
                }, this)
            }   
            </Container>
            { removeContacts }
            </>
        );
    }
}

export default Phonebook;