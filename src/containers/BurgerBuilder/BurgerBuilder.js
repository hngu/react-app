import React, { Component } from 'react';
import Aux from '../../hoc/examples/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    cheese: 0.5,
    salad: 0.2,
    meat: 1.5,
    bacon: 1
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        canPurchase: false
    }

    updatePurchaseState() {
        const ingredients = {
            ...this.state.ingredients
        };
        const sum = Object.keys(ingredients)
            .map(ingredient => ingredients[ingredient])
            .reduce((total, count) => total += count, 0);

        this.setState({canPurchase: sum > 0});
    }

    addIngredientHandler = (type) => {
        const updatedCount = this.state.ingredients[type] + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const newPrice = this.state.totalPrice + priceAddition;
        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice }, this.updatePurchaseState);
    }

    removeIngredientHandler = (type) => {
        const updatedCount = this.state.ingredients[type] - 1;
        if (updatedCount < 0) {
            return;
        }
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const newPrice = this.state.totalPrice - priceDeduction;
        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice }, this.updatePurchaseState);
    }    

    render() {
        const disabledIngredients = {
            ...this.state.ingredients
        };
        for (let key in disabledIngredients) {
            disabledIngredients[key] = disabledIngredients[key] <= 0;
        }
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    disabledIngredients={disabledIngredients}
                    canPurchase={this.state.canPurchase}
                    price={this.state.totalPrice} />
            </Aux>
        );
    }
}

export default BurgerBuilder;