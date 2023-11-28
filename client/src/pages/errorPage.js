import React from 'react';

const errorPage = (error) => {
  return (
    <div className="col">
        The great error has occurred: {error.message}
    </div>
  );
}

export default errorPage;