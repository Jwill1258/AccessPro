import React, {Component} from 'react';
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Book from "../components/Book";
import Footer from "../components/Footer";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

class Huddle extends Component {
    constructor(props) {
        super(props);
        this.state = {
          newItem: "",
          list: []
        };

    }

    //incorporating local storage 
    componentDidMount() {
        this.hydrateStateWithLocalStorage();

        // add event listener to save state to localStorage
        // when user leaves/refreshes the page
        window.addEventListener(
        "beforeunload",
        this.saveStateToLocalStorage.bind(this)
        );
    }

    componentWillUnmount() {
        window.removeEventListener(
        "beforeunload",
        this.saveStateToLocalStorage.bind(this)
        );

        // saves if component has a chance to unmount
        this.saveStateToLocalStorage();
    }

    hydrateStateWithLocalStorage() {
        // for all items in state
        for (let key in this.state) {
        // if the key exists in localStorage
        if (localStorage.hasOwnProperty(key)) {
            // get the key's value from localStorage
            let value = localStorage.getItem(key);

            // parse the localStorage string and setState
            try {
            value = JSON.parse(value);
            this.setState({ [key]: value });
            } catch (e) {
            // handle empty string
            this.setState({ [key]: value });
            }
        }
        }
    }

    saveStateToLocalStorage() {
        // for every item in React state
        for (let key in this.state) {
        // save to localStorage
        localStorage.setItem(key, JSON.stringify(this.state[key]));
        }
    }

    updateInput(key, value) {
        // update react state
        this.setState({ [key]: value });
    }

    addItem() {
        // create a new item with unique id
        const newItem = {
        id: 1 + Math.random(),
        value: this.state.newItem.slice()
    
        };

        // copy current list of items
        const list = [...this.state.list];

        // add the new item to the list
        list.push(newItem);

        // update state with new list, reset the new item input
        this.setState({
        list,
        newItem: ""
        });
    }

    deleteItem(id) {
        // copy current list of items
        const list = [...this.state.list];
        // filter out the item being deleted
        const updatedList = list.filter(item => item.id !== id);

        this.setState({ list: updatedList });
    }

    render() {
        return (
          <Container>
            <Row>
              <Col size="md-12">
                <Jumbotron>
                  <h1 className="text-center">
                    <strong>Trending Post</strong>
                  </h1>
                  <h2 className="text-center">Explore.Engage.Empower.</h2>
                </Jumbotron>
              </Col>
              <Col size="md-12">
                <Card title="Post Search" icon="far fa-Search">
                  <Form/>
                </Card>
                <Card title="Live Feed" icon="far fa-Search">
                  <List
                  
                    type="text"
                    placeholder="Type item here"
                    value={this.state.newItem}
                    onChange={e => this.updateInput("newItem", e.target.value)}
                  />
                  <button className="add-btn btn-floating" onClick={() => this.addItem()} disabled={!this.state.newItem.length}>Username:   Jwill: I just had a great arm workout!! #striveforgreatness </button>
                  <button className="add-btn btn-floating" onClick={() => this.addItem()} disabled={!this.state.newItem.length}>Username:   MGordon: Just declared to Kentuck, dreams come true! </button>
                  <button className="add-btn btn-floating" onClick={() => this.addItem()} disabled={!this.state.newItem.length}>Username:   King James: Rise and Shine! Lets start this lovely day on a highnote. </button>
                  <button className="add-btn btn-floating" onClick={() => this.addItem()} disabled={!this.state.newItem.length}>Username:   MBagley: Responding to King James: Preach  big fella!. </button>


                    
                </Card>
              </Col>
            </Row>
            <Footer />
          </Container>
        );
      
    }
}

export default Huddle;