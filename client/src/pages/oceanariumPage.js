import React from 'react';
import Form from 'react-bootstrap/Form';

const oceanariumPage = (oceanarium, fishs, molluscs) => {
  return (
    <div className="container text-left text-white">
      <h1>{oceanarium.name}</h1>
      <hr></hr>
      <a>{oceanarium.descr}</a>
      <hr></hr>
      <h2>Некоторые обитатели</h2>
      <div className="row row-cols-2">
          {fishs.map((fish) => (
            <Form.Group key={fish.id} className='col' >
                <h3>{fish.name}</h3>
                <a className="btn btn-primary btn-xl rounded-pill mt-5" href="#">Узнать больше</a>
            </Form.Group>
          ))}
          {molluscs.map((mollusc) => (
            <Form.Group key={mollusc.id} className='col' >
                <h3>{mollusc.name}</h3>
                <a className="btn btn-primary btn-xl rounded-pill mt-5" href="#">Узнать больше</a>
            </Form.Group>
          ))}
      </div>
    </div>
  );
}

export default oceanariumPage;