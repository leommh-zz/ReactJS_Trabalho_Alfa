import React, {Component} from 'react';
import {Button, Input, Alert} from 'reactstrap';

class FormLogin extends Component {
    
    onLoginClick = () => {
        const {email,senha} = this.state;
        this.props.onLogin({email,senha});
    }

    onInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]:value
        });
    }

    render(){
        
        return (
            <div className="login-page">
                <h1>Login</h1>

                    <Input className="inputNew" type="text" name="email" placeholder="email" onChange={this.onInputChange}/>
                    <Input className="inputNew" type="password" name="senha" placeholder="senha" onChange={this.onInputChange} />

                <center>
                    {this.props.erros && <Alert color='danger'> {this.props.erros} </Alert> }
                    <Button className="buttonNew" color="success" onClick={this.onLoginClick}> entrar </Button> 
                    <Button className="buttonNew" color="primary" onClick={this.props.cadastro}> cadastro </Button> 
                </center>
            </div>
        );
        
    }

} 

export default FormLogin;