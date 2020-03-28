import React, {Component} from 'react';
import api from "../utils/api/api";


class Login extends Component {
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


    render(){
        return(  
            
            <div className="container">
                <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <h2>Login Form</h2>
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
                    className="btn btn-default">Login</button>
                    </form>
                    <br />
                    <p>Or Signup <a href="/Signup">here</a></p>
                </div>
                </div>
            </div>



        );

    }

}

export default Login;