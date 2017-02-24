import React from 'react';
import Nav from '../components/Nav';
import Bowls from '../components/bowls/Bowls';

const BucketPage = () => {
    let { id, name } = document.getElementById('app').dataset;
    return(
        <div>
            <Nav />
            <a href="/">Back</a>
            <h2 className="center">{name}</h2>
            <hr />
            <Bowls bucketId={id} />
        </div>
    )
}

export default BucketPage;