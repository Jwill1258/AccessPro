import React, {Component} from 'react';
import { Input, TextArea, FormBtn } from "../components/Form";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";


class Profile extends Component {
    render(){
        return(
            <Container>
                <Card title="About" icon="far fa-Search">
                    <form>
                    <Input
                        name="name"
                        placeholder="Name (required)"
                    />
                    <Input
                        name="sports"
                        placeholder="Sports:Positions (required)"
                    />
                    <TextArea
                        name="bio"
                        placeholder="Bio (Optional)"
                    />
                    <FormBtn
                        // disabled={!(this.state.author && this.state.title)}
                        // onClick={this.handleFormSubmit}
                    >
                        Submit Update
                    </FormBtn>
                    </form>
                </Card>
            </Container>
        );

    }
}

export default Profile;