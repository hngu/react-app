import React from 'react';
import Aux from '../../hoc/examples/Aux/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const Layout = (props) => {
    return (
        <Aux>
            <Toolbar />
            <main className={classes['Content']}>
                {props.children}
            </main>
        </Aux>
    );
};

export default Layout;