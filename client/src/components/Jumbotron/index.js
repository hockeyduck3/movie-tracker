import React from 'react';

function Jumbotron({ children, id }) {
    return <div className='jumbotron' id={id ? id : ''}>{children}</div>
}

export default Jumbotron;
