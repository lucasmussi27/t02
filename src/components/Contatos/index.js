import React, { Component } from 'react'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.css'
export default class Contatos extends Component {
    render() {
        return(
            <section id="contatos" className="container-box">
                <div className="intro text-center">
                    <h1>CONTATOS</h1>
                </div>
                <div className="intro-txt">
                    <p>Entre em contato enviando uma mensagem através do formulário 
                        abaixo ou por Whatsapp
                    </p>
                    <p>+55 4399677-7845</p>
                </div>
                <div className="form-box">
                    <form method="POST" action="https://formspree.io/lucas_mussi97@hotmail.com">
                        <input type="text" name="nome" placeholder="Nome"/>
                        <input type="email" name="email" placeholder="Email"/>
                        <input type="text" name="assunto" placeholder="Assunto"/>
                        <textarea name="mensagem" placeholder="Mensagem"></textarea>
                        <button type="submit">ENVIAR</button>
                    </form>
                </div>
            </section>
        )
    }
}