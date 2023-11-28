import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

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
                    <li className="nav-item">
                        <a className="nav-link" href="fishcatalog">Рыбы</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="mollusccatalog">Моллюски</a>
                    </li>
                    {/* <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Живность
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu">
                            <Dropdown.Item><a className="dropdown-item" href="fishcatalog">Рыбы</a></Dropdown.Item>
                            <Dropdown.Item><a className="dropdown-item" href="#">Моллюски</a></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> */}
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