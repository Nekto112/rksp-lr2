import React from 'react';

const mainPage = (oceanarium, fish) => {
  return (
    <div class="container text-white">
            <a>Global Ocean - это удивительные места, где вы можете познакомиться с разнообразием морской жизни, узнать много интересного о ней и даже поучаствовать в увлекательных активностях. На нашем сайте вы найдете информацию о самых известных и популярных океанариумах в разных странах, их истории, экспозициях, услугах и ценах. Вы также сможете забронировать билеты онлайн и получить скидки на посещение.</a>
            <hr></hr>
            <h2>Случайные океанариумы</h2>
            <hr></hr>
            <section>
                <div class="container text-center">
                    <div class="row align-items-start">
                        <div class="col">
                            <h3>{oceanarium.name}</h3>
                            <h4>Описание</h4>
                            <a>это центр океанографии и морской биологии, где вы можете увидеть более 12 тысяч морских животных и посмотреть водное шоу с косатками и дельфинами</a>
                            <h5>Оценка: {oceanarium.grade}</h5>
                            <a class="btn btn-primary btn-xl rounded-pill mt-5" href="oceanarium.html">Узнать больше</a>
                        </div>
                        <div class="col">
                            <h3>Океанариум в Дубае</h3>
                            <h4>Описание</h4>
                            <a>это самый большой в мире океанариум, расположенный в торговом центре Dubai Mall. Здесь вы можете пройти по стеклянному тоннелю под водой, покормить рыб из рук или поплавать с акулами</a>
                            <h5>Оценка: отлично</h5>
                            <a class="btn btn-primary btn-xl rounded-pill mt-5" href="oceanarium.html">Узнать больше</a>
                        </div>
                        <div class="col">
                            <h3>Океанариум в Осаке</h3>
                            <h4>Описание</h4>
                            <a>это один из самых посещаемых океанариумов в Японии, известный своим гигантским аквариумом, в котором плавают два кита-акулы. Здесь вы можете погрузиться в мир Тихого океана и увидеть более 580 видов морских животных</a>
                            <h5>Оценка: отлично</h5>
                            <a class="btn btn-primary btn-xl rounded-pill mt-5" href="oceanarium.html">Узнать больше</a>
                        </div>
                    </div>
                </div>
            </section>
            <hr></hr>
            <h2>Случайная рыба</h2>
            <hr></hr>
            <section>
                <h3>{fish.name}</h3>
                <a>Относится к классу "Хрящевые рыбы", а также является пресноводной, обитают в Индо-Тихоокеанского регион</a>
            </section>
            <hr></hr>
            <section>
                <a>Если вы любите море и хотите узнать больше о его тайнах, то Global Ocean - это то, что вам нужно. На нашем сайте вы найдете все необходимые сведения для планирования вашего посещения. Не упустите шанс окунуться в удивительный мир океанариумов!</a>
            </section>
    </div>
  );
}

export default mainPage;