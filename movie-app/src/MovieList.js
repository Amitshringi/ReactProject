import React, { Component } from 'react'
import Moviecard from './Moviecard'


class  MovieList extends Component {
  
    render(){
        // const {title,plot,price,rating,stars,fav,cart,poster}=this.state;
        const {movies, addStars, decStars, toggleFav,Addcart} =this.props;
        
        return (
            <>
            {movies.map((movie) => <Moviecard movies={movie} 
            addStars={addStars}  
            decStars={decStars}
            toggleFav={toggleFav} 
            Addcart={Addcart}
            key={movie.id}
            />)}
            </>
          )

    }
  
}
export default MovieList;
