import React, { Component } from 'react'
import Skill from '../../services/skills.api'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.css'

export default class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: []
        };
    }

    componentDidMount() {
        this.loadSkills();
    }

    loadSkills = async () => {
        const response = await Skill.get();
        this.setState({ skills: response.data });
    }

    render() {
        return (
            <section id="skills" class="container-box">
                <div class="intro container text-center">
                    <h1>SKILLS</h1>
                </div>
                <div className="intro-txt">
                    <p>Aqui estão algumas das habilidades que eu domino, algumas
                        eu possuo bastante conhecimento enquanto outras eu estou
                        procurando me aperfeiçoar e melhorar.
                    </p>
                </div>
                <div className="skills-list">
                    <ul>{(this.state.skills.length && this.state.skills.map((item,key) =>
                        <li key={key}>{item.content}</li>) || <li>Nenhuma habilidade Cadastrada</li> )}
                    </ul>
                </div>
            </section>
        )
    }
}
