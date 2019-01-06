import axios from 'axios'

let BASEURL = 'http://localhost:3001/api'

const myConf = () => {
    return {headers:{'x-access-token': localStorage.getItem('token') }}
}

// export const login = (data) => {
//     return axios.post (`${BASEURL}/usuarios/login`, data)
//     .then( res => {
//         let token = res.data.token;
//         let {id, nome} = res.data.usuario;
//         localStorage.setItem('token', token);
//         localStorage.setItem('id',id);
//         setAutenticado(true);
//     })
//     .catch( err => console.log(err))
// }

export const login = (data) => {
    return axios.post (`${BASEURL}/usuarios/login`, data);
}

export const getTarefas = () => {
    return axios.get (`${BASEURL}/tarefas`, myConf());
}

export const buscaTarefas = (titulo) => {
    return axios.get (`${BASEURL}/tarefas?titulo=${titulo}`, myConf());
}

export const  getUsuario = (id) => {
    return axios.get ( `${BASEURL}/usuarios/${id}`, myConf() );
}

export const cadUsuario = (data) => {
    return axios.post (`${BASEURL}/usuarios`, data)
}

export const editarUsuario = (data) => {
    let {id, nome, nascimento, cpf, email, senha} = data;
    return axios.put (`${BASEURL}/usuarios/${id}`, {nome, email, nascimento, cpf, senha}, myConf());
    //.then( res => { localStorage.setItem('userData', JSON.stringify(res.data)) })
}

export const cadTarefa = (data) => {
    return axios.post (`${BASEURL}/tarefas`, data, myConf())
}

export const delTarefa = (id) => {
    return axios.delete(`${BASEURL}/tarefas/${id}`, myConf());
}

export const concluiTarefa = (id) => {
    return axios.put(`${BASEURL}/tarefas/${id}/concluida`, id, myConf());
}

export const desconcluiTarefa = (id) => {
    return axios.delete(`${BASEURL}/tarefas/${id}/concluida`, myConf());
}

export const editaTarefa = (id, dados) => {
    return axios.put(`${BASEURL}/tarefas/${id}`, dados, myConf());
}