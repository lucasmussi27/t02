import React, { Component } from 'react'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.css'
import Portfolios from '../../services/portfolio.api'
export default class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            portfolios: []
        }
    }

    componentDidMount() {
        this.loadPortfolios();
    }

    loadPortfolios = async () => {
        const response = await Portfolios.get();
        this.setState({ portfolios: response.data });
    }

    render() {
        return(
            <section id="portfolios" className="container-box">
                <div className="intro text-center">
                    <h1>PORTFOLIOS</h1>
                </div>
                <div className="intro-txt">
                    <p>Uma seleção de alguns trabalhos que realizei durante o 
                        meu período de estudo na UTFPR, desde trabalhos de Web até
                        alguns projetos desenvolvidos por mim mesmo.
                    </p>
                </div>
                <div className="port-list">
                    <ul>{(this.state.portfolios.length && this.state.portfolios.map((item,key) =>
                        <li key={key}>
                            <div className="port-item">
                                <h4>{item.titulo}</h4>
                                <a href={item.link}>{item.link}</a>
                                <p>{item.descricao}</p>
                            </div>
                        </li>) || <li>Nenhum Portfólio Cadastrado</li> )}
                    </ul>
                </div>
            </section>
        )
    }
}