import React from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
const Menu = () => (
    <nav class="navbar justify-content-end">
        <div className="navbar-expand-sm ">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#">HOME</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#perfil">PERFIL</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#skills">SKILLS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#portfolios">PORTFOLIOS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#biografia">BIOGRAFIA</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#contatos">CONTATOS</a>
                </li>
            </ul>
        </div>
    </nav>
);
export default Menu;