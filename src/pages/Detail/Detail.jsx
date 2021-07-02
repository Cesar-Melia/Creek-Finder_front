import React from 'react';
import { withRouter } from 'react-router-dom';

const Detail = (props) => {
  console.log(props.history.length);
  console.log('componente details---> ', props.creek)
  return (
    <main>
      <button className='button' onClick={() => {
        if (props.history.length <= 2) {

        }

      }}>
        Back
      </button>
      Detail working
    </main>
  );
};

export default withRouter(Detail);
