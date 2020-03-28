import React, {Component} from 'react';
import api from "../utils/api/api";
import { Container } from '@material-ui/core';
import Card from "../components/Card";


class Signup extends Component {
    state = {
        email: "",
        password: "",
        
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };

    handleFormSubmit = event => {
    event.preventDefault();
    api.createUser({
        email:this.state.email,
        password: this.state.password
    });
    };

      // When the signup button is clicked, we validate the email and password are not blank
//   signUpForm.on("submit", function(event) {
//     event.preventDefault();
//     var userData = {
//       email: emailInput.val().trim(),
//       password: passwordInput.val().trim()
//     };

//     if (!userData.email || !userData.password) {
//       return;
//     }
//     // If we have an email and password, run the signUpUser function
//     signUpUser(userData.email, userData.password);
//     emailInput.val("");
//     passwordInput.val("");
//   });

//   // Does a post to the signup route. If succesful, we are redirected to the members page
//   // Otherwise we log any errors
//   function signUpUser(email, password) {
//     $.post("/api/signup", {
//       email: email,
//       password: password
//     }).then(function(data) {
//       window.location.replace(data);
//       // If there's an error, handle it by throwing up a boostrap alert
//     }).catch(handleLoginErr);
//   }

//   function handleLoginErr(err) {
//     $("#alert .msg").text(err.responseJSON);
//     $("#alert").fadeIn(500);
//   }
// });

    render(){
        return(  
            
            <Container>
                <Card>
                    <form className="container">
                        <div className="row">
                        <div className="col-md-6 col-md-offset-3">
                            <h2>Sign Up Form</h2>
                            <form className="signup">
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input 
                                handleInputChange={this.handleInputChange}
                    
                                type="email" 
                                name="email"
                                value={this.state.email}
                                className="form-control" 
                                id="email-input" 
                                placeholder="Email"/>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input 
                                type="password" 
                                name="password"
                            
                                className="form-control" 
                                id="password-input" 
                                placeholder="Password"/>
                            </div>
                            <div  id="alert" className="alert alert-danger" role="alert">
                                <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                                <span className="sr-only">Error:</span> <span className="msg"></span>
                            </div>
                            <button 

                            type="submit" 
                            className="btn btn-default">Sign Up</button>
                            </form>
                            <br />
                            <p>Or log in <a href="/login">here</a></p>
                        </div>
                        </div>
                    </form>
                </Card>
            </Container>



        );

    }
}

export default Signup;