import React from 'react';
import Form from 'react-bootstrap/Form';

const catalogPage = (oceanariums) => {
  return (
    <div class="container text-center text-white">
        <div class="row row-cols-2">
            {oceanariums.map((oceanarium) => (
                <Form.Group key={oceanarium.id} className='col' >
                    <h3>{oceanarium.name}</h3>
                    <a>Локация: {oceanarium.location}</a>
                    <h5>Оценка: {oceanarium.grade}</h5>
                    <a className="btn btn-primary btn-xl rounded-pill mt-5" href={"/oceanarium?id="+oceanarium.id}>Узнать больше</a>
                </Form.Group>
            ))}
        </div>
	</div>
  );
}

export default catalogPage;