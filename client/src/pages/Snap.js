import React, {Component} from 'react';
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Book from "../components/Book";
import Footer from "../components/Footer";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

class Snap extends Component {
    render() {
        return (
          <Container>
            <Row>
              <Col size="md-12">
                <Jumbotron>
                  <h1 className="text-center">
                    <strong>Save and Post your Highlights and footage!</strong>
                  </h1>
                  <h2 className="text-center">Explore.Engage.Empower.</h2>
                </Jumbotron>
              </Col>
              <Col size="md-12">
                <Card title="Upload/Save/Share your content" icon="far fa-Book">
                  <List
                  />
                <button className="add-btn btn-floating">Drag and Drop </button>

                </Card>
              </Col>
            </Row>
            <Footer />
          </Container>
        );
      
    }
}

export default Snap;