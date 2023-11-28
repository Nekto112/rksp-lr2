import React from 'react';
import Form from 'react-bootstrap/Form';

const molluscPage = (mollusc, oceanariums) => {
  return (
    <div className="container text-left text-white">
      <h1>{mollusc.name}</h1>
      <hr></hr>
      <a>Относится к классу {mollusc.species}</a>
      <hr></hr>
      <h2>Этого моллюска вживую вы сможете поспотреть в этих местах:</h2>
      <div className="row row-cols-2">
          {oceanariums.map((oceanarium) => (
            <Form.Group key={oceanarium.id} className='col' >
                <h3>{oceanarium.name}</h3>
                <a className="btn btn-primary btn-xl rounded-pill mt-5" href={"/oceanarium?id="+oceanarium.id}>Узнать больше</a>
            </Form.Group>
          ))}
      </div>
    </div>
  );
}

export default molluscPage;