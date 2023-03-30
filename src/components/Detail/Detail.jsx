import React from 'react';

const Detail = (props) => {
    console.log(props);
    const {idMeal, strMeal, strCategory} = props.d;
    return (
        <div className='border border-warning p-3 m-2 rounded'>
            <h3>Food: {strMeal}</h3>
            <p>Category: {strCategory}</p>
            <p>Id: {idMeal}</p>
        </div>
    );
};

export default Detail;