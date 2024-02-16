import React from "react";

import style from "./Navbar.module.css";

class Navbar extends React.Component {

  
    render() {   
      const {movies, CartCount}=this.state;
       
      return (
      <>
      <div className={style.Nav}>
        
      <div className={style.Title}>MOVIE APP</div>
        
        <div className="CartContainer">
            <img src = "https://cdn-icons-png.flaticon.com/128/891/891462.png" alt="cart-icon" className={style.CartImg}/>
                    
            
            <div className={style.CartCount}>{CartCount}</div>
            </div>
        </div>

      </>
      )
    }
  }  
 
  
  export default Navbar;
  