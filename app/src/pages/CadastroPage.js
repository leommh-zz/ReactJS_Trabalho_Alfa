import React, { Component } from 'react';
import {Alert, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroup, InputGroupAddon} from 'reactstrap';
import {cadUsuario, login} from '../components/Api';
import { FaUserAlt,FaAt,FaMoneyCheck,FaKey,FaCalendarAlt  } from "react-icons/fa";

class CadastroPage extends Component {

  state = {
    modal: false
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }


  onSubmit = (e) => {
    cadUsuario(this.state)
    .then(res => {
      let {email, senha} = this.state;
      login({email,senha});
      this.toggle();
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

  render() {
    const {erros} = this.state;
    return (
      <div>
        <br></br>

        <Button outline color="success" onClick={this.toggle}>Novo</Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Novo Usuário</ModalHeader>
          <ModalBody>

            <InputGroup>
            <label className="inputLabelNew"><FaUserAlt /></label>
            <Input className="inputNew" placeholder="nome" name="nome" type="text" onChange={this.onChange} required />
            </InputGroup>

            <InputGroup>
            <label className="inputLabelNew"><FaAt /></label>
            <Input className="inputNew" placeholder="e-mail" name="email" type="email" onChange={this.onChange} required />
            </InputGroup>

            <InputGroup>
            <label className="inputLabelNew"><FaMoneyCheck /></label>
            <Input className="inputNew" placeholder="cpf" name="cpf" type="text" onChange={this.onChange} required />
            </InputGroup>

            <InputGroup>
            <label className="inputLabelNew"><FaCalendarAlt /></label>
            <Input className="inputNew" placeholder="data de nascimento" name="nascimento" type="date" onChange={this.onChange} required />
            </InputGroup>

            <InputGroup>
            <label className="inputLabelNew"><FaKey /></label>
            <Input className="inputNew" placeholder="senha" name="senha" type="password" onChange={this.onChange} required />
            </InputGroup>

              {
                  erros !== undefined && erros.length > 0 && (
                      <Alert color="danger"> 
                          { erros.map(erro => <p>{erro.msg}</p> ) }
                      </Alert>
                  )
              }

          </ModalBody>
          <ModalFooter>
            <Button className="buttonNew" color="success" onClick={this.onSubmit}>Cadastrar</Button>
            <Button className="buttonNew" color="danger" onClick={this.toggle}>Cancelar</Button>
          </ModalFooter>
        </Modal>


      </div>
    )
  }
}

export default CadastroPage;



