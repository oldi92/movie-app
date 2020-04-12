import React from 'react';

import Auxiliary from '../Auxiliary/Auxiliary';
import Navigation from '../../components/Navigation/Navigation'

const layout = (props) => (
    <Auxiliary>
        <Navigation />
        <main>
            {props.children}
        </main>
    </Auxiliary>
);

export default layout