import React from 'react'

import Lottie from "lottie-react";
import Animation3 from "../Animation/sam.json"

const Header = () => {
    return(
    <div class="abc">
  <div class="row">
    <div class="col">
     {/* <Lottie animationData={Animation3} loop={true} /> */}
    </div>
    <div class="col">
    <p>Industrial training Weekly Test</p> 
      <p>instructions</p>
      <p>.30 marks</p>
      <p>.MCQ type</p>
      <p>.Limited time</p>
      <button type="button" class="btn btn-primary m-2">OPEN WEB-DEVELOPMENT TEST</button><br/>
      <button type="button" class="btn btn-primary m-2">OPEN APP-DEVELOPMENT TEST</button>
    </div>
  </div>
</div>
    
   )
    }
    export default Header;