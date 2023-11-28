import React from 'react';
import Form from 'react-bootstrap/Form';

const mainPage = (oceanariums, fish) => {
  return (
    <div class="container text-white">
            <a>Global Ocean - это удивительные места, где вы можете познакомиться с разнообразием морской жизни, узнать много интересного о ней и даже поучаствовать в увлекательных активностях. На нашем сайте вы найдете информацию о самых известных и популярных океанариумах в разных странах, их истории, экспозициях, услугах и ценах. Вы также сможете забронировать билеты онлайн и получить скидки на посещение.</a>
            <hr></hr>
            <h2>Случайные океанариумы</h2>
            <hr></hr>
            <section>
                <div className="container text-center">
                    <div className="row align-items-start">
                        {oceanariums.map((oceanarium) => (
                            <Form.Group key={oceanarium.id} className='col' >
                                <h3>{oceanarium.name}</h3>
                                <h4>Описание</h4>
                                <a>{oceanarium.descr}</a>
                                <h5>Оценка: {oceanarium.grade}</h5>
                                <a className="btn btn-primary btn-xl rounded-pill mt-5" href={"/oceanarium?id="+oceanarium.id}>Узнать больше</a>
                            </Form.Group>
                        ))}
                    </div>
                </div>
            </section>
            <hr></hr>
            <h2>Случайная рыба</h2>
            <hr></hr>
            <section>
                <h3>{fish.name}</h3>
                <a>Относится к классу {fish.species}, а также является {fish.habitat}, обитают в {fish.location}</a>
            </section>
            <hr></hr>
            <section>
                <a>Если вы любите море и хотите узнать больше о его тайнах, то Global Ocean - это то, что вам нужно. На нашем сайте вы найдете все необходимые сведения для планирования вашего посещения. Не упустите шанс окунуться в удивительный мир океанариумов!</a>
            </section>
    </div>
  );
}

export default mainPage;