import React from "react";
import HeroImg from '../../public/static/images/hero.jpg';

function Hero () {
    return (
      <div style={{backgroundImage: `url(${HeroImg})`,  backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '800px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div style={{textAlign: 'center'}}>
        <h1>Do da thang</h1>
        </div>
      </div>
    )
  }

  export default Hero