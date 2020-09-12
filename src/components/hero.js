import React from "react";
import HeroImg from '../../public/static/images/hero.jpg';

function Hero () {
    return (
      <div style={{backgroundImage: `url(${HeroImg})`,  backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '300px'}}>
          
        <h1>Do da thang</h1>
      </div>
    )
  }

  export default Hero