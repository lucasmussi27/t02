import React, { Fragment } from 'react';
import Menu from '../../components/Menu';
import Pefil from '../../components/Perfil';
import Skills from '../../components/Skills';
import Portfolio from '../../components/Portfolio';
import Biografia from '../../components/Biografia'
import Contatos from '../../components/Contatos';
import Rodape from '../../components/Rodape';
import './styles.css';
const Main = () => {
    return(
        <Fragment>
            <Menu />
            <Pefil />
            <Skills />
            <Portfolio />
            <Biografia />
            <Contatos />
            <Rodape />
        </Fragment>
    );
}
export default Main;