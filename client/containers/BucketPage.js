import React from 'react';
import Nav from '../components/Nav';
import Lists from '../components/lists/Lists';

const BucketPage = () => {
    let { id, name } = document.getElementById('app').dataset;
    return(
        <div>
            <Nav />
            <a href="center">Back</a>
            <h2 className="center">{name}</h2>
            <hr />
            <Lists boardId={id} />
        </div>
    )
}

export default BucketPage;