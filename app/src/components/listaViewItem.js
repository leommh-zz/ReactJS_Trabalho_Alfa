import React, {Component} from 'react';
import {Button} from 'reactstrap';
import { FaPencilAlt, FaRedo, FaTrash, FaTimes, FaSave} from "react-icons/fa";


class listaViewItem extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            edit: false, 
            titulo: props.tarefa.titulo,
            descricao: props.tarefa.descricao,
            status: props.tarefa.concluida,
        };

        this.removeTarefa = () => {
            this.props.removeTarefa(this.props.tarefa.id);
        }

        this.editarTarefa = () => {
            // this.props.editarTarefa(this.props.index, this.state.texto);
            const id = this.props.tarefa.id;
            const {titulo, descricao} = this.state;
            this.props.editarTarefa(id, {titulo, descricao});
            this.setState({edit:false});
        }

        this.abrirForm = () => {
            this.setState({edit: true});
        }

        this.fecharForm = () => {
            this.setState({edit: false});
        }

        this.onChange = (ev) => {
            this.setState({[ev.target.name]: ev.target.value});
        }

        this.alterarEstado = () =>{
            this.props.alterarEstado(this.props.tarefa.id, this.props.tarefa.concluida);
        }



    } // constructor

    render(){

        if (!this.state.edit){
            return (
                <tr>
                    <td>{this.props.index+1}</td>
                    <td>{this.props.tarefa.titulo}</td>
                    <td>{this.props.tarefa.descricao}</td>
                    <td>
                        { this.props.tarefa.concluida === 1 ? <span className='text-success'>SIM</span> : <span className='text-warning'>NÃO</span> } &nbsp;
                    </td>
                    <td className='btn-table'>
                        <Button outline size='sm' color='primary' title='alterar estado' onClick={this.alterarEstado}><FaRedo /></Button>
                        <Button outline size='sm' color='warning' title='editar' onClick={this.abrirForm}><FaPencilAlt /></Button>
                        <Button outline size='sm' color='danger' title='deletar' onClick={this.removeTarefa}><FaTrash /></Button>
                    </td>
                </tr>
                );
        }
        return (
            <tr>
                <td>{this.props.index+1}</td>
                <td><input class='input-table' name="titulo" value={this.state.titulo} onChange={this.onChange} /></td>
                <td><input class='input-table' name="descricao" value={this.state.descricao} onChange={this.onChange} /></td>
                <td>
                { this.props.tarefa.concluida === 1 ? <span className='text-success'>SIM</span> : <span className='text-warning'>NÃO</span> } &nbsp;
                </td>
                <td>
                    {/* <a href="#" title='salvar' className='text-success' onClick={this.editarTarefa}>  </a> &nbsp;
                    <a href="#" title='cancelar' onClick={this.fecharForm}>  </a> */}
                    <Button outline size='sm' color='primary' title='alterar estado' onClick={this.alterarEstado}><FaRedo /></Button>
                    <Button outline size='sm' color='success' title='salvar' onClick={this.editarTarefa}><FaSave /></Button>
                    <Button outline size='sm' color='danger' title='cancelar' onClick={this.fecharForm}>< FaTimes /></Button>
                </td>
            </tr>
        );
    }

}

export default listaViewItem;