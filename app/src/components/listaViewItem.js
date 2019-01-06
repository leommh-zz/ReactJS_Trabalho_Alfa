import React, {Component} from 'react';
import {Button} from 'reactstrap';
import { FaPencilAlt, FaRedo, FaTrash, FaTimes, FaSave} from "react-icons/fa";


class listaViewItem extends Component {
    
    state = { 
        edit: false, 
        titulo: this.props.tarefa.titulo,
        descricao: this.props.tarefa.descricao,
        status: this.props.tarefa.concluida,
    };

    removeTarefa = () => {
        this.props.removeTarefa(this.props.tarefa.id);
    }

    editarTarefa = () => {
        const id = this.props.tarefa.id;
        const {titulo, descricao} = this.state;
        this.props.editarTarefa(id, {titulo, descricao});
        this.setState({edit:false});
    }

    abrirForm = () => {
        this.setState({edit: true});
    }

    fecharForm = () => {
        this.setState({edit: false});
    }

    onChange = (ev) => {
        this.setState({[ev.target.name]: ev.target.value});
    }

    alterarEstado = () =>{
        this.props.alterarEstado(this.props.tarefa.id, this.props.tarefa.concluida);
    }

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
                    <Button outline size='sm' color='primary' title='alterar estado' onClick={this.alterarEstado}><FaRedo /></Button>
                    <Button outline size='sm' color='success' title='salvar' onClick={this.editarTarefa}><FaSave /></Button>
                    <Button outline size='sm' color='danger' title='cancelar' onClick={this.fecharForm}>< FaTimes /></Button>
                </td>
            </tr>
        );
    }

}

export default listaViewItem;