import React from 'react';
import { isAutenticado, setAutenticado } from '../utils/LoginManager';
import { Nav, NavItem} from 'reactstrap';
import {
    Link,
    withRouter,
} from 'react-router-dom';

const Menu = (props) => {

    const aut = isAutenticado();

    return (
        <div>

            <Nav className="menu">
                <NavItem>
                    <Link className="nav-link" to="/"> Home </Link>
                </NavItem>

                { 
                    aut && (
                        <NavItem>
                            <Link className="nav-link" to="/tarefas"> Tarefas </Link>
                        </NavItem>
                    ) 
                }

                {
                    aut && (
                        <NavItem>
                            <a  
                                href="/" 
                                className="nav-link" 
                                onClick={ ()=> {
                                    setAutenticado(false);
                                    props.history.push('/');
                                }
                            }>
                                Sair
                            </a>
                        </NavItem>
                    )
                }

            </Nav>
        </div>
    );

}

export default withRouter(Menu);