import React from 'react';

const navBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <div class="container px-5">
            <a class="navbar-brand" href="index.html">Glocal Ocean</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="index.html">Главная</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="oceanariums.html">Океанариумы</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Представители
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Рыбы</a></li>
                        <li><a class="dropdown-item" href="#">Моллюски</a></li>
                    </ul>
                </li>
            </ul>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="#!">Регестрация</a></li>
                    <li class="nav-item"><a class="nav-link" href="#!">Вход</a></li>
                </ul>
            </div>
        </div>
    </nav>
  );
}

export default navBar;