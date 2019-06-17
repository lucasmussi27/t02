import React, { Component }from 'react'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.css'
export default class Rodape extends Component {
    render() {
        return(
            <footer className="rodape">
                <div>
                    <ul>
                        <li><a href="https://www.facebook.com/0.N1rvana">
                            <img src="https://img.icons8.com/material-rounded/54/ffffff/facebook.png" />
                        </a></li>
                        <li><a href="https://www.instagram.com/lucas.mussi27/">
                            <img src="https://img.icons8.com/material-rounded/54/ffffff/instagram.png" />
                        </a></li>
                        <li><a href="https://www.linkedin.com/in/lucas-mussi27/">
                            <img src="https://img.icons8.com/material-rounded/54/ffffff/linkedin.png" />
                        </a></li>
                        <li><a href="https://github.com/lucasmussi27">
                            <img src="https://img.icons8.com/ios-glyphs/54/ffffff/github.png" />
                        </a></li>
                    </ul>
                </div>
            </footer>
        )
    }
}