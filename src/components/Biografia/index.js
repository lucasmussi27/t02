import React, { Component } from 'react'
import Infos from '../../services/infos.api'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.css'
export default class Biografia extends Component {
    constructor(props) {
        super(props);
        this.state = {
            infos: []
        }
    }

    componentDidMount() {
        this.loadInfos();
    }

    loadInfos = async () => {
        const response = await Infos.get();
        this.setState({ infos: response.data });
    }

    render() {
        return(
            <section id="biografia" className="container-box">
                <div className="intro text-center">
                    <h1>BIOGRAFIA</h1>
                </div>
                <div className="intro-txt text-center">
                    <p>Um pouco mais sobre mim e sobre como eu decidi estudar programação.</p>
                </div>
                <ul>{(this.state.infos.length && this.state.infos.map((item,key) =>
                    <li>
                        <div className="info-box">
                            <h3>{item.titulo}</h3>
                            <p>{item.content}</p>
                        </div>
                </li>) || <li>Nenhuma Info Cadastrada!</li> )}
                </ul>
            </section>
        )
    }
}