import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Meat', type: 'meat'},
];
const BuildControls = (props) => (
    <div className={classes['BuildControls']}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(control => (
            <BuildControl 
                key={control.label} 
                label={control.label}
                adder={() => props.addIngredient(control.type)}
                remover={() => props.removeIngredient(control.type)}
                disabled={props.disabledIngredients[control.type]} />
        ))}
        <button disabled={!props.canPurchase} className={classes['OrderButton']}>ORDER NOW</button>
    </div>
);

export default BuildControls;