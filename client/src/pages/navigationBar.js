import React from 'react';

const navigationBar = () => {
  return (
    <div className='container text-left text-white'>
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div className="container px-5">
                <a className="navbar-brand" href="/">Glocal Ocean</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="/">Главная</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="catalog">Океанариумы</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Представители
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Рыбы</a></li>
                            <li><a className="dropdown-item" href="#">Моллюски</a></li>
                        </ul>
                    </li>
                </ul>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link" href="#!">Регестрация</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">Вход</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  );
}

export default navigationBar;