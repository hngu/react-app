import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Sidedrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/examples/Aux/Aux';

const SideDrawer = (props) => {
    let attachedClasses = [classes['Sidedrawer']];
    if (props.open) {
        attachedClasses.push(classes['Open']);
    } else {
        attachedClasses.push(classes['Close']);
    }
    attachedClasses = attachedClasses.join(' ');
    return (
        <Aux>
            <Backdrop show={props.open} click={props.closed} />
            <div className={attachedClasses}>
                <div className={classes['Logo']}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};

export default SideDrawer;