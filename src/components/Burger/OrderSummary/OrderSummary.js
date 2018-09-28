import React from 'react';
import Aux from '../../../hoc/examples/Aux/Aux';
import Button from '../../UI/Button/Button';

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
        <Button btnType="Danger" click={props.purchaseCancel}>CANCEL</Button>
        <Button btnType="Success" click={props.purchaseContinue}>CONTINUE</Button>
    </Aux>
    );
};

export default OrderSummary;