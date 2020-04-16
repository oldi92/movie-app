import React from 'react';

import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import classes from './Modal.module.css';
import Youtube from '../Youtube/Youtube';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTimes} from '@fortawesome/free-solid-svg-icons';

const Modal = (props) => {
    
    return(
        <Auxiliary>
                <div className={classes.BackDrop} onClick={props.onClickModal} style={{
                    transition : 'opacity 0.3s ease-in',
                    opacity : !props.show ? '1' : '0',
                    transform: !props.show ? 'translateY(0)' : 'translateY(-100vh)'
                    
                }}>
                </div> 
                <div className={classes.Modal} style={{
                    transition : 'all 0.4s ease-in-out',
                    opacity : !props.show ? '1' : '0',
                    transform: !props.show ? 'translateY(0)' : 'translateY(-100vh)'
                }}>
                    <div className={classes.TitleDiv}>
                        <div className={classes.Title}>{props.title}</div>
                        < FontAwesomeIcon icon={faStar} size='3x'/>
                        <div className={classes.Rate}>
                            {props.rate}
                            <span>/10</span>
                            </div>
                            <FontAwesomeIcon onClick={props.onClickModal} 
                                             className={classes.Close} 
                                             icon={faTimes} size='2x' />
                    </div>


                    <div className={classes.Duration}>
                        <div className={classes.DurationTime}>Duration: {props.duration}</div>
                        <div>Category: {props.category}</div>
                        </div>


                    <div className={classes.Video}>
                        <div className={classes.Youtube}>
                        <Youtube trailer={props.trailer} style={{width:'100%'}}/>
                        </div>
                        <ul style={{displa: 'flex',flexFlow : 'row'}}>
                            <li><img src={props.image} alt='modal images'/></li>
                            <li><button className={classes.Button}>Play</button></li>
                        </ul>
                    </div>

                    <div className={classes.Context}>{props.body}</div>
                </div>
        </Auxiliary>
    )
}

export default Modal