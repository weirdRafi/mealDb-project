import React, { useEffect, useState } from 'react';
import SingleMeal from '../SingleMeal/SingleMeal';

const Meal = ({handleAddToDetails}) => {
    const [meals, setMeals]= useState([])
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
        .then(response => response.json())
        .then(data => setMeals(data.meals))
    },[])
    
    return (
        <div className='d-flex flex-wrap'>
            {
                meals.map(meal => <SingleMeal meal={meal} handleAddToDetails={handleAddToDetails}></SingleMeal>)
            }
        </div>
    );
};

export default Meal;