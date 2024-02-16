

function Moviecard(props){
  
  
  // //add the stars
  // addStars = () => {
  //   if (this.state.stars >= 5) {
  //     return;
  //   }

  //   // form 1
  //   this.setState({
  //     stars: this.state.stars + 0.5,
  //   });

  //   // console.log("this", this);

  //   // second form
  //   // this.setState((prevState) => {
  //   //     return{
  //   //         stars: prevState.stars+0.5
  //   //     }
  //   // });
  // };

  // //remove the stars
  // removeStars = () => {
  //   if (this.state.stars <= 0) {
  //     return;
  //   }

  //   this.setState({
  //     stars: this.state.stars - 0.5,
  //   });

  //   // this.setState((prevState) => {
  //   //     return{
  //   //         stars: prevState.stars-0.5
  //   //     }
  //   // });
  // };

  //   handleFav=()=>{
  //       this.setState({
  //           fav : !this.state.fav
  //       })
  //   };

  //   handleCart=()=>{
  //       this.setState({
  //           cart : !this.state.cart
  //       })
  //   };

  
    const {movies, addStars, decStars, toggleFav, Addcart} = props
        const {title, plot, poster, price, rating,stars,fav, cart} = props.movies;
    
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img
              alt="Poster"
              src="https://i.etsystatic.com/13367669/r/il/8adffe/1506815473/il_570xN.1506815473_lb94.jpg"
            />
          </div>

          <div className="right">
            <div className="title">{title}</div>
            <div className="plot">{plot}</div>
            <div className="price">R.s {price}</div>

            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="star-dis">
                <img
                  className="str-btn"
                  alt="decrese"
                  src="https://cdn-icons-png.flaticon.com/128/43/43625.png"
                  onClick={()=>{decStars(movies)}}
                />

                <img
                  alt="star"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                  className="stars"
                />

                <img
                  className="str-btn"
                  alt="increase"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png"
                  onClick={()=>{addStars(movies)}}
                />

                <span className="starCount">{stars}</span>
              </div>

            {/* METOD-1 */}
              {/* {fav ? (
                <button className="unfavourite-btn" onClick={this.handleFav}>
                  UnFavorite
                </button>
              ) : (
                <button className="favourite-btn" onClick={this.handleFav}>
                  Favorite
                </button>
              )} */}


                <button className={fav? "unfavourite-btn" : "favourite-btn"}  onClick={()=>{toggleFav(movies)}}>
                 {fav? "UnFavorite" :"Favorite"} 
                </button>
              

              <button className={cart ? "uncart-btn" : "cart-btn"} onClick={()=>{Addcart(movies)}}>{cart? "Remove to cart" : "Add to cart"}</button>

            </div>
          </div>
        </div>
      </div>
    );
  }

export default Moviecard;
