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
                <tr className="rowNew">
                    <td className="columnNew">{this.props.index+1}</td>
                    <td className="columnNew">{this.props.tarefa.titulo}</td>
                    <td className="columnNew">{this.props.tarefa.descricao}</td>
                    <td className="columnNew">
                        { this.props.tarefa.concluida === 1 ? <span className='text-success'>SIM</span> : <span className='text-warning'>NÃO</span> } &nbsp;
                    </td>
                    <td className="columnNew">
                        <Button className="buttonNew2" onClick={this.alterarEstado}> marcar </Button> 
                        <Button className="buttonNew2" onClick={this.abrirForm}> editar </Button> 
                        <Button className="buttonNew2" onClick={this.removeTarefa}> deletar </Button> 
                    </td>
                </tr>
                );
        }
        return (

            <tr className="rowNew">
                <td className="columnNew">{this.props.index+1}</td>
                <td className="columnNew"><input class='inputNew' name="titulo" value={this.state.titulo} onChange={this.onChange} /></td>
                <td className="columnNew"><input class='inputNew' name="descricao" value={this.state.descricao} onChange={this.onChange} /></td>
                <td className="columnNew">
                    { this.props.tarefa.concluida === 1 ? <span className='text-success'>SIM</span> : <span className='text-warning'>NÃO</span> } &nbsp;
                </td>
                <td className="columnNew">
                    <Button className="buttonNew2" onClick={this.alterarEstado}> marcar </Button> 
                    <Button className="buttonNew2" onClick={this.editarTarefa}> salvar </Button> 
                    <Button className="buttonNew2" onClick={this.fecharForm}> cancelar </Button> 
                </td>
            </tr>

        );
    }

}

export default listaViewItem;