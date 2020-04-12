import React, { Component } from 'react';

import classes from './Home.module.css';
import Featured from '../../components/Featured/Featured';
import featured from '../../data/featured/featured.json';
import movies from '../../data/featured/movies.json';
import Categories from '../../components/Categories/Categories'


class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataState : [],
            actionMovies : []
        }       
    }
    
    componentDidMount(){
        this.featuredHanlder()
        this.actionHandler()   
    }

    actionHandler = () => {
        const dataActions = Object.keys(movies).map( (key, value) => {
            return movies[key]
            
       })
        const copyactionMovies = [...dataActions]
        this.setState({ actionMovies : copyactionMovies}) 
        //copyactionMovies.filter(element => element.id === 1)   
        //console.log(copyactionMovies.filter( element => element.title === "Unbroken"));
            
    }

    featuredHanlder = () => {
        const data = Object.keys(featured).map( (key, value) => {
            return featured[key]
       })
        const copyData = [...data]        
        this.setState({ dataState : copyData})
    }


    render() {
        let categoryDiv= []

        const actionMovies = this.state.actionMovies
        const actionMoviesFilter = actionMovies.filter(element => element.category === "action")
        categoryDiv =  actionMoviesFilter.map(element => {
            return <Categories title={element.title} 
                               image={element.img} 
                               body={element.body}/> 
        })
        console.log(actionMoviesFilter);



        let copyfeaturedDiv =[]
        let featuredDiv= ''
        const copyData = this.state.dataState
        copyfeaturedDiv = copyData.filter( element =>  element.key === "moneyHeist")
        copyfeaturedDiv.map( element => {
            return featuredDiv = <Featured 
                                    image={element.img}
                                    title={element.title}
                                    body={element.body} />
        })

        return(
            <div className={classes.Home}>
                {featuredDiv}
                <ul className={classes.Action}>
                    {categoryDiv}
                </ul>
            </div>
        )
    }
}

export default Home;