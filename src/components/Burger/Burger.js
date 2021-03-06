import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map((ingredient) => {
        return [...Array(props.ingredients[ingredient])].map((_, index) => {
            return <BurgerIngredient key={`${ingredient}-${index}`} type={ingredient} />;
        });
    }).reduce((arr, element) => {
        return arr.concat(element);
    });

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please add ingredients!</p>;
    }

    return (
        <div className={classes['Burger']}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default Burger;