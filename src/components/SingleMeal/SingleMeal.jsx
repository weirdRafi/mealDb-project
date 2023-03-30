import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const SingleMeal = (props) => {
    const { strMeal, strCategory, strMealThumb } = props.meal;

    const handleAddToDetails = props.handleAddToDetails;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>
                        {strCategory}
                    </Card.Text>
                    <Button onClick={()=>handleAddToDetails(props.meal)} variant="primary">Details <FontAwesomeIcon icon={faCircleInfo} /></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleMeal;