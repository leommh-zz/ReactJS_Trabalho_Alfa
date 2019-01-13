import React,{Component} from 'react';
import {Alert, Input, Button, InputGroup} from 'reactstrap';
import { FaUserAlt,FaAt,FaMoneyCheck,FaKey,FaCalendarAlt  } from "react-icons/fa";
import {cadUsuario} from '../components/Api';

class FormCadastro extends Component {

    state = {
        erros: []
    }

    onSubmit = (e) => {
        cadUsuario(this.state)
        .then(res => {
            let {email, senha} = this.state;
            this.props.onLogin({email,senha});
        })
        .catch(err => {
            let erros = []
            Object.values(err.response.data.validationErrors).map(err => erros.push(err))
            this.setState({erros})
        })
    }
    
    onChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    render(){
        const {erros} = this.state;
        return (
            <div>
                <InputGroup>
                    <Input className="inputNew" placeholder="nome" name="nome" type="text" onChange={this.onChange} required />
                </InputGroup>

                <InputGroup>
                    <Input className="inputNew" placeholder="e-mail" name="email" type="email" onChange={this.onChange} required />
                </InputGroup>

                <InputGroup>
                    <Input className="inputNew" maxLength={11} placeholder="cpf" name="cpf" type="text" onChange={this.onChange} required />
                </InputGroup>

                <InputGroup>
                    <Input className="inputNew" placeholder="data de nascimento" name="nascimento" type="date" onChange={this.onChange} required />
                </InputGroup>

                <InputGroup>
                    <Input className="inputNew" placeholder="senha" name="senha" type="password" onChange={this.onChange} required />
                </InputGroup>

                {
                    erros !== undefined && erros.length > 0 && (
                        <Alert color="danger"> 
                            { erros.map(erro => <p>{erro.msg}</p> ) }
                        </Alert>
                    )
                }
                <center>
                    <Button color="success" onClick={this.onSubmit}>Cadastrar</Button>
                    <Button color="danger" onClick={this.props.cancela}>Cancelar</Button>
                </center>

            </div>
        )
    }
}

export default FormCadastro;