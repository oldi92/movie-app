/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import classes from './Featured.module.css'


const Featured = (props) => {
    return(
    <div className={classes.Featured}>
        <img src={props.image}/>  
        <div className={classes.Paragraph}>
            <h2>{props.title}</h2>
            <p>{props.body}</p>
            <button><FontAwesomeIcon icon={faPlay} size='1x' style={{paddingRight: '0.5vw'}}/> Play</button>
        </div>
    </div>
    )
}

export default Featured