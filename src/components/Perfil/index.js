import React, { Component } from 'react'
import Interesses from '../../services/interesse.api'
import Formacoes from '../../services/formacao.api'
import Idiomas from '../../services/idioma.api'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.css'
const photo = require('../../images/perfil-img.png');
export default class Perfil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            interesses: [],
            formacoes: [],
            idiomas: []
        }
    }
    
    componentDidMount() {
        this.loadInteresses();
        this.loadFormacoes();
        this.loadIdiomas();
    }
    
    loadInteresses = async () => {
        const response = await Interesses.get();
        this.setState({ interesses: response.data });
    }

    loadFormacoes = async () => {
        const response = await Formacoes.get();
        this.setState({ formacoes: response.data });
    }

    loadIdiomas = async () => {
        const response = await Idiomas.get();
        this.setState({ idiomas: response.data });
    }

    render() {
        return (
            <section id="perfil" className="container-box row">
                <div class="intro text-center">
                    <h1>PERFIL</h1>
                </div>
                <div className="list-box col-sm-4">
                    <div class="listas">
                        <h3>&#9824; Interesses</h3>
                        <ul>{(this.state.interesses.length && this.state.interesses.map((item,key) =>
                            <li key={key}>{item.content}</li>) || <li>Nenhum Interesse Cadastrado</li> )}
                        </ul>
                    </div>

                    <div class="listas">
                        <h3>&#9829; Formação</h3>
                        <ul>{(this.state.formacoes.length && this.state.formacoes.map((item,key) =>
                            <li key={key}>{item.content}</li>) || <li>Nenhuma Formação Cadastrada</li> )}
                        </ul>
                    </div>

                    <div class="listas">
                        <h3>&#9827; Idiomas</h3>
                        <ul>{(this.state.idiomas.length && this.state.idiomas.map((item,key) =>
                            <li key={key}>{item.content}</li>) || <li>Nenhum Idioma Cadastrado</li> )}
                        </ul>
                    </div>
                    <div class="listas">
                        <h3>&#9830; Atividade</h3>
                        <ul>
                            <li>Estudante Universitário</li>
                        </ul>
                    </div>
                </div>
                <div className="perfil col-sm-4">
                    <img src={photo} alt="foto-perfil" />
                    <h3>LUCAS A. MUSSI</h3>
                    <p>Estudante de Análise e Desenvolvimento de Sistemas 
                        na UTFPR, campus Cornélio Procópio. Residente de 
                        Assaí - PR
                    </p>
                    <button className="btn">CURRICULUM VITAE</button>
                </div>
            </section>
        )
    }
}