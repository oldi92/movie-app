import React, { useState , useEffect} from 'react';

import classes from './Navigation.module.css';
import logo from '../../assets/logo/logo.png';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navigation(){
    
    let [ classArray , setClass] = useState('')

    useEffect(() => {
        console.log(classArray);        
        window.addEventListener('scroll' , () => {
            const scrollPixels = window.scrollY
            if(scrollPixels > 70){
                scrollHnadler()
            }else{
                clearScrollHandler()
            }
        })         
    });

    const clearScrollHandler = () =>{
        setClass(classArray = '')
    }

    const scrollHnadler = () =>{
        setClass(classArray = 'rgb(20,20,20)')            
    }
    
    return(
        <div className={classes.Navigation} style={{
                                                    backgroundColor: classArray,
                                                    transition: 'all 0.4s ease-in',}}>
            <img src={logo} alt='logo' />
            <ul>
                <li>Home</li>
                <li>Movies</li>
                <li>Mylist</li>
            </ul>
            <div className={classes.Search}>
                <div>
                <FontAwesomeIcon icon={faSearch} size='1x' />
                <input type='text' name='search' />
                </div>
            </div>
        </div>
    );
}

export default Navigation 