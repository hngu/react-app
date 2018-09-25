import React from 'react';
import Aux from '../../../hoc/examples/Aux/Aux';

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(ingredient => {
        return (
            <li key={ingredient}>
                <span style={{textTransform: 'capitalize'}}>{ingredient}</span>: {props.ingredients[ingredient]}
            </li>
        );    
    });
    return (
        <Aux>
        <h3>Your Order</h3>
        <p>A burger with the following ingredients:</p>
        <ul>
            {ingredientSummary}
        </ul>
        <p>Continue to checkout?</p>
    </Aux>
    );
};

export default OrderSummary;