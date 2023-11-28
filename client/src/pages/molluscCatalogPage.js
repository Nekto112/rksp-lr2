import React from 'react';
import Form from 'react-bootstrap/Form';

const molluscCatalogPage = (molluscs) => {
  return (
    <div class="container text-center text-white">
        <div class="row row-cols-2">
            {molluscs.map((mollusc) => (
                <Form.Group key={mollusc.id} className='col' >
                    <h3>{mollusc.name}</h3>
                    <a>Относится к: {mollusc.species}</a>
                    <div>
                    <a className="btn btn-primary btn-xl rounded-pill mt-5" href={"/fish?id="+mollusc.id}>Узнать больше</a>
                    </div>
                </Form.Group>
            ))}
        </div>
	</div>
  );
}

export default molluscCatalogPage;