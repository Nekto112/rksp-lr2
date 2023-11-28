import React from 'react';
import Form from 'react-bootstrap/Form';

const fishCatalogPage = (fishs) => {
  return (
    <div class="container text-center text-white">
        <div class="row row-cols-2">
            {fishs.map((fish) => (
                <Form.Group key={fishs.id} className='col' >
                    <h3>{fish.name}</h3>
                    <a>Обитает в: {fish.location}</a>
                    <div>
                    <a className="btn btn-primary btn-xl rounded-pill mt-5" href={"/fish?id="+fish.id}>Узнать больше</a>
                    </div>
                </Form.Group>
            ))}
        </div>
	</div>
  );
}

export default fishCatalogPage;